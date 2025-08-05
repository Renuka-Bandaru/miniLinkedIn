const db = require("../Database/db");

// GET profile
exports.getProfile = (req, res) => {
  try {
    const query = `SELECT id, name, email, bio FROM users WHERE id = ?`;
    const user = db.prepare(query).get(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json(user);
  } catch (err) {
    console.error("Get profile error:", err.message);
    res.status(500).json({ message: "Failed to fetch user profile." });
  }
};

// UPDATE bio
exports.updateBio = (req, res) => {
  const { bio } = req.body;

  try {
    const stmt = db.prepare(`UPDATE users SET bio = ? WHERE id = ?`);
    const result = stmt.run(bio, req.user.id);

    if (result.changes === 0) {
      return res.status(404).json({ message: "User not found or bio unchanged." });
    }

    res.json({ message: "Bio updated successfully." });
  } catch (err) {
    console.error("Update bio error:", err.message);
    res.status(500).json({ message: "Failed to update bio." });
  }
};
