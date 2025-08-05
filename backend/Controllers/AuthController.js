const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Database/db");

const JWT_SECRET = process.env.JWT_SECRET || "secretKey"; 

// Register
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const stmt = db.prepare(query);
    stmt.run(name, email, hashedPassword);
  
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      // Specific error for UNIQUE constraint (e.g., email already exists)
      return res.status(400).json({ message: "User already exists." });
    }
    console.error("DB Error:", err);
    res.status(500).json({ message: "Database error during registration." });
  }
  
}
// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  try {
    const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
    const user = stmt.get(email); // returns undefined if no match

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};