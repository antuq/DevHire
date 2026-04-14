const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    role:{
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    link:{
        type: String,
        trim: true,
        default: ""
    },
    status:{
        type: String,
        enum: ["Applied","Offer","Interviewing","Rejected"],
        default: "Applied"
    },
    salary:{
        type: String,
        trim: true,
        default:""
    },
    location:{
        type: String,
        trim: true,
        default: ""
    },
    notes:{
        type: String,
        trim: true,
        default: ""
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model("Job",jobSchema);