var User = require('../model/user.model')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../utilities/config')
var logger = require('../utilities/logger')

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
        User.findOne({ username: req.body.username }).exec().then((user) => {
            var result = bcrypt.compareSync(req.body.password, user.password); console.log('result', result)
            if (result) {
                var token = jwt.sign({ username: req.body.username }, config.password, { expiresIn: config.expireTime });
                var response = { username: req.body.username, token: token };
                res.status(201)
                logger.info(response)
                res.send(response)
            }
            else {
                res.status(401)
                logger.error({error: "Unauthorized"})
                res.json("Unauthorised")
            }
        }
        ).catch((err) => {
            res.status(401)
            logger.error({error: "Unauthorized", err})
            res.json("Unauthorised")
        })

    }
}