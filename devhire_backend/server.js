require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose DB connected.");
    })
    .catch(err => {
        console.log("Error occurred:", err.message);
    });

app.use("/api", jobRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on ${process.env.PORT || 5000}.`);
});