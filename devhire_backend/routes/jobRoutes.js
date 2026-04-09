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

// create job route
router.post("/jobs", createJob);

// read all jobs route
router.get("/jobs", getJobs);

// read one job route
router.get("/jobs/:id", getJobById);

// update job by id route
router.put("/jobs/:id", updateJob);

// delete job by id route
router.delete("/jobs/:id", deleteJob);

module.exports = router;