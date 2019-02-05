var express = require('express')
var route = express.Router()
var productCtrl = require('../controllers/product.ctrl')


//route.get('/', productCtrl.get)
route.get('/', productCtrl.get)
route.get('/:pageSize/:pageIndex', productCtrl.getByPage)
route.get('/:id',productCtrl.getById)
route.post('/', productCtrl.save)

module.exports = route