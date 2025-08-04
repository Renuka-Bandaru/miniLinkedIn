const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Database/db");

const JWT_SECRET = process.env.JWT_SECRET || "yoursecret"; // fallback for development

// Register
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.run(query, [name, email, hashedPassword], function (err) {
    if (err) {
      return res.status(500).json({ message: "User already exists or DB error." });
    }
    res.status(201).json({ message: "User registered successfully!" });
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ?`;
  db.get(query, [email], (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};
