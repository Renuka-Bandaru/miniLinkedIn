const express = require("express");
const router = express.Router();
const authenticateToken = require("../Middleware/AuthMiddleware");
const ProfileController = require("../Controllers/ProfileController");

router.get("/", authenticateToken, ProfileController.getProfile);
router.put("/", authenticateToken, ProfileController.updateBio);

module.exports = router;
