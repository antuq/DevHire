const mongoose = require("mongoose");
const Job = require("../models/Job");

// =======================
//  CREATE JOB
// =======================
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
        console.log("Error storing data:", err.message);
        res.status(500).json({ message: "Error creating job" });
    }
};


// ==============================================
//  READ ALL JOBS || SEARCH + FILTER + PAGINATION
// ==============================================
const getJobs = async (req, res) => {
    try {
        // commenting out for testing purpose 
        // let { status, company, role, location, sort, page, limit } = req.query;

        // search parameter will be helpful to use the OR query operator to look for company, location and role from a single input easing the use of input fields for user.
        // this simplifies the search operation for the user as the user can directly enter names such as google frontend etc together and the $or query can find the terms in the db.
        let { status, search, sort, page, limit } = req.query;

        // trim inputs
        status = status?.trim();
        // company = company?.trim();
        // role = role?.trim();
        // location = location?.trim();
        search = search?.trim();

        // pagination setup
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const skip = (page - 1) * limit;

        // ---------------FOR TESTING PURPOSE-------------------------
        let filter = { user: req.user};

        // ---------------FOR TESTING PURPOSE-------------------------

        // exact filter
        if (status) filter.status = status;

        // search (partial + case insensitive)
        // if (company) {
        //     filter.company = { $regex: company, $options: "i" };
        // }

        // if (role) {
        //     filter.role = { $regex: role, $options: "i" };
        // }

        // if (location) {
        //     filter.location = { $regex: location, $options: "i" };
        // }

        if (search) {
            filter.$or = [
                { company: { $regex: search, $options: 'i' } },
                { role: { $regex: search, $options: 'i' } },
                { location: { $regex: search, $options: "i" } }
            ]
        }

        // query
        let query = Job.find(filter);

        // sorting
        if (sort) {
            query = query.sort(sort);
        } else {
            query = query.sort("-createdAt");
        }

        // total count
        const totalJobs = await Job.countDocuments(filter);
        const totalPages = Math.ceil(totalJobs / limit);

        // pagination
        query = query.skip(skip).limit(limit);
        const jobs = await query;

        // response
        res.status(200).json({
            totalJobs,
            currentPage: page,
            totalPages,
            jobs
        });

    } catch (err) {
        console.log("Error reading data:", err.message);
        res.status(500).json({ message: "Job not found or not authorized" });
    }
};

// =======================
//  GET JOB BY ID
// =======================
const getJobById = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const job = await Job.findOne({ _id: id, user: req.user});


        if (!job) {
            return res.status(404).json({ message: "Error fetching job" });
        }

        res.status(200).json(job);

    } catch (err) {
        console.log("Error reading data:", err.message);
        res.status(500).json({ message: "Job not found or not authorized" });
    }
};


// =======================
//  UPDATE JOB
// =======================
const updateJob = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const updatedJob = await Job.findOneAndUpdate(
            {_id: id , user: req.user },
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!updatedJob) {
            return res.status(404).json({ message: "Error updating job" });
        }

        res.status(200).json({
            message: "Job updated successfully!",
            updatedJob
        });

    } catch (err) {
        console.log("Error updating data:", err.message);
        res.status(500).json({ message: "Job not found or not authorized" });
    }
};

// =======================
//  DELETE JOB
// =======================
const deleteJob = async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const deletedJob = await Job.findOneAndDelete({ _id : id, user: req.user});

        if (!deletedJob) {
            return res.status(404).json({ message: "Job not found or not authorized" });
        }

        res.status(200).json({
            message: "Job deleted successfully!"
        });

    } catch (err) {
        console.log("Error deleting data:", err.message);
        res.status(500).json({ message: "Error deleting job" });
    }
};

// =======================
//  EXPORT CONTROLLERS
// =======================
module.exports = {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
};