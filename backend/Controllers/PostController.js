const db = require("../Database/db");

// Create new post
exports.createPost = (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Post content is required." });
  }

  try {
    const stmt = db.prepare(`INSERT INTO posts (user_id, content) VALUES (?, ?)`);
    const result = stmt.run(req.user.id, content);

    res.status(201).json({
      message: "Post created successfully.",
      postId: result.lastInsertRowid,
    });
  } catch (err) {
    console.error("Create post error:", err.message);
    res.status(500).json({ message: "Failed to create post." });
  }
};

// Get all posts
exports.getAllPosts = (req, res) => {
  try {
    const query = `
      SELECT posts.id, posts.content, posts.created_at, users.name as author_name, users.id as author_id
      FROM posts
      JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
    `;
    const rows = db.prepare(query).all();

    const formattedPosts = rows.map(row => ({
      id: row.id,
      content: row.content,
      timestamp: row.created_at,
      author: {
        id: row.author_id,
        name: row.author_name,
      },
    }));

    res.json(formattedPosts);
  } catch (err) {
    console.error("Get all posts error:", err.message);
    res.status(500).json({ message: "Failed to fetch posts." });
  }
};

// Get posts by user ID
exports.getPostsByUser = (req, res) => {
  const userId = req.params.id;

  try {
    const query = `
      SELECT posts.id, posts.content, posts.created_at
      FROM posts
      WHERE user_id = ?
      ORDER BY created_at DESC
    `;
    const rows = db.prepare(query).all(userId);

    res.json(rows);
  } catch (err) {
    console.error("Get user's posts error:", err.message);
    res.status(500).json({ message: "Failed to fetch user's posts." });
  }
};
