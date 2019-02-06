var User = require('../model/user.model')
var bcrypt = require('bcryptjs');
module.exports = {
    signup: (req, res) => {
        // res.status(200);
        // res.json("posted successfully")
        var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(2))
        req.body.password = password;
        var user = new User(req.body);
        user.save().then((user) => {
            var jsonUser = user.toJSON();
            delete jsonUser.password;
            res.status(201);
            res.json(jsonUser);
        }).catch((err) => {
            res.status(500)
            res.json(err)
        })
    },
    signin: (req, res) => {
        //var user = new User(req.body);
        User.findOne({ username: req.body.username }).exec().then((user) => {
            var result = bcrypt.compareSync(req.body.password, user.password);
            if (result) {
                res.status(201);
                res.json("Success")
            }
            else {
                res.status(401)
                res.json("Unauthorised")
            }
        }
        ).catch((err) => {
            res.status(401)
            res.json("Unauthorised")
        })

    }
}