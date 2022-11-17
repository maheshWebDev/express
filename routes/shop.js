// const path = require('path');

const express = require('express');
const adminController = require('../controller/routeController')
const routes = express.Router();

routes.get('/',adminController.shop)

module.exports = routes