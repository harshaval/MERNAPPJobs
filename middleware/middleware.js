const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const withAuth = function(req, res, next){
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.cookies.token;
    if(!token) {
        res.status(401).send("Unauthorised: No token provided");
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if(err){
                req.status(401).send("Unauthorised: NO token provided");
            } else {
                req.email = decoded.email;
                next();
            }
        })
    }
};

module.exports = withAuth;