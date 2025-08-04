const db = require("../Database/db");

// GET profile
exports.getProfile = (req, res) => {
  const query = `SELECT id, name, email, bio FROM users WHERE id = ?`;
  db.get(query, [req.user.id], (err, row) => {
    if (err || !row) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json(row);
  });
};

// UPDATE bio
exports.updateBio = (req, res) => {
  const { bio } = req.body;

  const query = `UPDATE users SET bio = ? WHERE id = ?`;
  db.run(query, [bio, req.user.id], function (err) {
    if (err) {
      return res.status(500).json({ message: "Failed to update bio." });
    }
    res.json({ message: "Bio updated successfully." });
  });
};
