// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to allow access allow control origin. 
app.use(cors());

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
const authRoutes = require("./routes/authRoutes");

const Job = require("./models/Job");
const User = require("./models/User");

app.use("/api",jobRoutes);
app.use("/api/auth",authRoutes);

app.listen(5000,()=>{
    console.log("Server running on 5000.");
})