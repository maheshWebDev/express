const express = require('express');
const path = require('path');
const adminController = require('../controller/routeController')
const routes = express.Router();


routes.get('/add-product',adminController.addProduct)

routes.post('/product',adminController.product)

module.exports = routes