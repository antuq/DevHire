const mongoose = require("mongoose");
const Job = require("../models/Job");

// Create job
const createJob = async (req, res) => {
    try {
        const job = new Job({
            ...req.body,
            user: req.user
        });

        await job.save();

        res.status(201).json({
            message: "Job created successfully!",
            job
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating job"
        });
    }
};

// Get all jobs with search, filter and pagination
const getJobs = async (req, res) => {
    try {
        let { status, search, sort, page, limit } = req.query;

        // Trim inputs
        status = status?.trim();
        search = search?.trim();

        // Pagination setup
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const skip = (page - 1) * limit;

        // Filter jobs belonging to the logged-in user
        const filter = {
            user: req.user
        };

        // Exact status filter
        if (status) {
            filter.status = status;
        }

        // Partial, case-insensitive search
        if (search) {
            filter.$or = [
                { company: { $regex: search, $options: "i" } },
                { role: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } }
            ];
        }

        let query = Job.find(filter);

        // Sorting
        if (sort) {
            query = query.sort(sort);
        } else {
            query = query.sort("-createdAt");
        }

        // Total count
        const totalJobs = await Job.countDocuments(filter);
        const totalPages = Math.ceil(totalJobs / limit);

        // Pagination
        query = query.skip(skip).limit(limit);

        const jobs = await query;

        res.status(200).json({
            totalJobs,
            currentPage: page,
            totalPages,
            jobs
        });
    } catch (err) {
        res.status(500).json({
            message: "Job not found or not authorized"
        });
    }
};

// Get job by ID
const getJobById = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ID"
            });
        }

        const job = await Job.findOne({
            _id: id,
            user: req.user
        });

        if (!job) {
            return res.status(404).json({
                message: "Error fetching job"
            });
        }

        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({
            message: "Job not found or not authorized"
        });
    }
};

// Update job
const updateJob = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ID"
            });
        }

        const updatedJob = await Job.findOneAndUpdate(
            { _id: id, user: req.user },
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!updatedJob) {
            return res.status(404).json({
                message: "Error updating job"
            });
        }

        res.status(200).json({
            message: "Job updated successfully!",
            updatedJob
        });
    } catch (err) {
        res.status(500).json({
            message: "Job not found or not authorized"
        });
    }
};

// Delete job
const deleteJob = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ID"
            });
        }

        const deletedJob = await Job.findOneAndDelete({
            _id: id,
            user: req.user
        });

        if (!deletedJob) {
            return res.status(404).json({
                message: "Job not found or not authorized"
            });
        }

        res.status(200).json({
            message: "Job deleted successfully!"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting job"
        });
    }
};

module.exports = {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
};