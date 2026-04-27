const jwt = require("jsonwebtoken");

const protect = ( req, res, next ) => {
    try{
        let token;

        // check if headers exist
        if(
            req.headers.authorization &&
             req.headers.authorization.startsWith("Bearer")
        ) {
            // Debug
            console.log("Authorization Header:", req.headers.authorization);
            token = req.headers.authorization.split(" ")[1];
        }

        // if no token -> reject
        if(!token){
            return res.status(401).json({
                message: "Not Authorized."
            });
        }

        // if token exists -> verify
        const decoded = jwt.verify(token, "secretkey");
        console.log("Decoded:", decoded);

        // attach user info to request
        req.user = decoded.id;

        // continue to controller.
        next();
    } catch (err) {
        return res.status(401).json({
            message:"Authorisation failed."
        })
        console.log("Error Occured: ", err.message)
    }
}

module.exports = protect;