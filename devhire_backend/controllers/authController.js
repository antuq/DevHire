const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// User registration
const userRegistration = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        // Basic sanitization
        name = name.trim();
        email = email.toLowerCase().trim();
        password = password.trim();

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully!",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Registration failed."
        });
    }
};

// User login
const userLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        email = email.toLowerCase().trim();
        password = password.trim();

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User doesn't exist"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login Successful.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Login Failed."
        });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            user
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching profile"
        });
    }
};

// Update user profile
const updateUserProfile = async (req, res) => {
    try {
        let { name, email } = req.body;

        // Basic sanitization
        name = name.trim();
        email = email.toLowerCase().trim();

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        const user = await User.findById(req.user);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const existingUser = await User.findOne({
            email,
            _id: { $ne: req.user }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use"
            });
        }

        user.name = name;
        user.email = email;

        await user.save();

        return res.status(200).json({
            message: "User updated successfully.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating profile."
        });
    }
};

// Update user password
const updateUserPassword = async (req, res) => {
    try {
        let { password } = req.body;

        password = password.trim();

        if (!password) {
            return res.status(400).json({
                message: "Password is required"
            });
        }

        const user = await User.findById(req.user);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            message: "Password updated successfully."
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating password"
        });
    }
};

module.exports = {
    userRegistration,
    userLogin,
    getUserProfile,
    updateUserProfile,
    updateUserPassword
};