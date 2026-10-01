const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        let token;

        // Check for authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        // Reject request if no token is provided
        if (!token) {
            return res.status(401).json({
                message: "Not Authorized."
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to request
        req.user = decoded.id;

        // Continue to controller
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Authorisation failed."
        });
    }
};

module.exports = protect;