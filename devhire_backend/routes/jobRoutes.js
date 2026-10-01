const express = require("express");

const router = express.Router();

const {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");

// Create job
router.post("/jobs", protect, createJob);

// Read all jobs
router.get("/jobs", protect, getJobs);

// Read one job
router.get("/jobs/:id", protect, getJobById);

// Update job
router.put("/jobs/:id", protect, updateJob);

// Delete job
router.delete("/jobs/:id", protect, deleteJob);

module.exports = router;