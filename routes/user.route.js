var express = require('express');
var route = express.Router();
var userCtrl = require('../controllers/user.ctrl');
route.post('/signup', userCtrl.signup);
route.post('/signin', userCtrl.signin);

module.exports = route;