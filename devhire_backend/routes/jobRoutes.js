const express = require("express");
const router = express.Router();

const {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob,
    add_multiple_jobs
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");

// create job route
router.post("/jobs", protect, createJob);

// read all jobs route
router.get("/jobs",protect, getJobs);

// read one job route
router.get("/jobs/:id", protect, getJobById);

// update job by id route
router.put("/jobs/:id", protect, updateJob);

// delete job by id route
router.delete("/jobs/:id", protect, deleteJob);

module.exports = router;