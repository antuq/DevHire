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

        // check fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            })
        }

        // sanitise fields
        email.toLowerCase().trim();
        password.trim();

        // find user
        const user = await User.findOne({ email });

        if (!user) {
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


module.exports = { userRegistration, userLogin };