const express = require("express");

const router = express.Router();

const {
    userRegistration,
    userLogin,
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

router.post("/register", userRegistration);
router.post("/login", userLogin);

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.put("/password", protect, updateUserPassword);

module.exports = router;