var express = require('express')
var route = express.Router()
var reviewCtrl = require('../controllers/review.ctrl')
route.post('/', reviewCtrl.save)
route.get('/:id',reviewCtrl.getId)
module.exports = route;