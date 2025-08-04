const db = require("../Database/db");

// Create new post
exports.createPost = (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Post content is required." });
  }

  const query = `INSERT INTO posts (user_id, content) VALUES (?, ?)`;
  db.run(query, [req.user.id, content], function (err) {
    if (err) {
      return res.status(500).json({ message: "Failed to create post." });
    }

    res.status(201).json({
      message: "Post created successfully.",
      postId: this.lastID,
    });
  });
};

// Get all posts
exports.getAllPosts = (req, res) => {

    const query = `
    SELECT posts.id, posts.content, posts.created_at, users.name as author_name, users.id as author_id
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.created_at DESC
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch posts." });
    }
    //Transform each row to include author object
    const formattedPosts = rows.map(row => ({
      id: row.id,
      content: row.content,
      timestamp: row.created_at,
      author: {
        id: row.author_id,
        name: row.author_name
      }
    }));

    res.json(formattedPosts);
  
  });
};

// Get posts by userId
exports.getPostsByUser = (req, res) => {
  const userId = req.params.id;

  const query = `
    SELECT posts.id, posts.content, posts.created_at
    FROM posts
    WHERE user_id = ?
    ORDER BY created_at DESC
  `;
  db.all(query, [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch user's posts." });
    }

    res.json(rows);
  });
};
