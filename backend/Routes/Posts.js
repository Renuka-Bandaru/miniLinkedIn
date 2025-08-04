const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/AuthMiddleware");
const PostController = require("../Controllers/PostController");

router.post("/", authenticateToken, PostController.createPost);
router.get("/", authenticateToken, PostController.getAllPosts);
router.get("/:id", authenticateToken, PostController.getPostsByUser);

module.exports = router;
