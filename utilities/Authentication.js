var jwt = require('jsonwebtoken');

isAuthenticated = (req, res, next) => {
    var requestHeader = req.headers["authorization"];
    jwt.verify(requestHeader, "secret", (err, success) => {
        console.log('success',success)
        if (success) next();
        else {
            console.log('err', err)
            res.status(401);
            res.send("Unauthorized")
        }
    })

}

module.exports = isAuthenticated;