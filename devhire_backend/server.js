// Load environment variables
require("dotenv").config();
require("./models/Job");

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");

// Initialize app
const app = express();

// Middleware to parse JSON
app.use(express.json());


// =======================
// DATABASE CONNECTION
// =======================
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose DB connected.");
    })
    .catch(err => {
        console.log("Error occurred:", err.message);
    });

const jobRoutes = require("./routes/jobRoutes");
const Job = require("./models/Job");
app.use("/api",jobRoutes);



app.get("/add-multiple-jobs", async (req, res) => {
    try {
        const jobs = await Job.insertMany([
            {
                company: "Flipkart",
                role: "Backend Intern",
                location: "Bangalore",
                salary: "₹25,000/month",
                status: "Applied"
            },
            {
                company: "Swiggy",
                role: "Full Stack Intern",
                location: "Remote",
                salary: "₹20,000/month",
                status: "Interviewing"
            },
            {
                company: "Zomato",
                role: "Frontend Developer",
                location: "Delhi",
                salary: "8 LPA",
                status: "Rejected"
            },
            {
                company: "Paytm",
                role: "Software Engineer Intern",
                location: "Noida",
                salary: "₹30,000/month",
                status: "Applied"
            },
            {
                company: "Razorpay",
                role: "Backend Developer",
                location: "Bangalore",
                salary: "10 LPA",
                status: "Offer"
            },
            {
                company: "CRED",
                role: "React Developer",
                location: "Remote",
                salary: "₹35,000/month",
                status: "Interviewing"
            },
            {
                company: "Meesho",
                role: "SDE Intern",
                location: "Bangalore",
                salary: "₹28,000/month",
                status: "Applied"
            },
            {
                company: "Ola",
                role: "Full Stack Developer",
                location: "Bangalore",
                salary: "9 LPA",
                status: "Rejected"
            }
        ]);

        res.json({
            message: "Multiple jobs inserted successfully",
            count: jobs.length
        });

    } catch (err) {
        console.log("Error inserting multiple jobs:", err.message);
        res.status(500).json({ message: "Error inserting jobs" });
    }
});

app.listen(5000,()=>{
    console.log("Server running on 5000.");
})