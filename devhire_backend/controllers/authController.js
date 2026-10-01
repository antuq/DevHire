const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// user registration

const userRegistration = async (req, res) => {

    try {
        let { name, email, password } = req.body;

        // basic sanitation
        name = name.trim();
        email = email.toLowerCase().trim();
        password = password.trim();

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        // email validation
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format."
            })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Simple storage: direct password storage.  
        // const user = await User.create({ name, email, password });  

        // Encrypted passoword storage using bcrypt. stores encrypted password by adding random data (salt) and confiugrable cost factor.
        // Bcrypt uses modified blowfish cipher for encryption.

        const salt = await bcrypt.genSalt(10); //greater the cost factor, more secure but takes more time.
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "User registered successfully!",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        console.log("Error Occured: ", err.message);
        res.status(500).json({ message: "Registration failed." });
    }
}

// USER LOGIN
const userLogin = async (req, res) => {

    try {
        let { email, password } = req.body;

        // 1. Check what the frontend is actually passing
        console.log("--- DEBUG LOGIN START ---");
        console.log("Raw req.body received from client:", req.body);

        // check fields
        if (!email || !password) {
            console.log("CRITICAL: Email or Password was parsed as undefined/empty!");
            return res.status(400).json({
                message: "Email and password are required."
            })
        }

        // sanitise fields
        email = email.toLowerCase().trim();
        password = password.trim();

         console.log("Sanitized variables being sent to MongoDB query -> Email:", `"${email}"`, "Password:", `"${password}"`);

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            console.log("Mongoose Database Query Result:", user);
        console.log("--- DEBUG LOGIN END ---");
            return res.status(400).json({
                message: "User doesn't exist"
            })
        }
        

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        // JWT : Generate Token
        const token = jwt.sign(
            { id: user._id},
            "secretkey",
            { expiresIn: "1d"}
        );

        // success (for now)
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
        })
        console.log("error occured: ",err.message)
    }
}

const getUserProfile = async (req,res) => {
    try{
        // find user profile
        const user = await User.findById(req.user).select("-password");

        // raise error if doesn't exist
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }

        // return user
        return res.status(200).json({
            user
        });

    } catch(err){
        console.log("Error fetching user profile:", err.message);
        res.status(500).json({
            message: "Error fetching profile"
        });
    }
}

const updateUserProfile = async (req,res) => {
    try{
        let { name, email } = req.body;

        // basic sanitization
        name = name.trim();
        email = email.trim();

        // check if fields are filled.
        if(!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            })
        }

        // Email Validation
        const emailRegex =  /^\S+@\S+\.\S+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                message: "Invalid email format"
            })
        }
        
        // find the logged-in user
        const user = await User.findById(req.user);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // check if the email is already taken by another user.
        const existingUser = await User.findOne({
            email,
            _id : {$ne: req.user}
        })

        if(existingUser){
            return res.status(400).json({
                message: "Email already in use"
            });
        }

        // update user
        user.name = name;
        user.email = email;

        await user.save();

        return res.status(200).json({
            message: "User updated successfully.",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        console.log("Error updating profile: ", err.message);

        res.status(500).json({
            message: "Error updating profile."
        })
    }
}

const updateUserPassword = async (req,res) => {
    try{
        let { password } = req.body;

        // sanitization
        password = password.trim();

        // check password
        if(!password){
            return res.status(400).json({
                message: "Password is required"
            })
        }

        // find the logged in user
        const user = await User.findById(req.user);

        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }

        // hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // update password
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            message: "Password updated successfully."
        });

    } catch (err){
        console.log("error occured: ",err.message);

        res.status(500).json({
            message: "Error updating password"
        })
    }
}

module.exports = { 
    userRegistration, 
    userLogin, 
    getUserProfile, 
    updateUserProfile,
    updateUserPassword
};