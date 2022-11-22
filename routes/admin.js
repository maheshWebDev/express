
const express = require('express');

const controller = require('../controller/adminController')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',controller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',controller.postProduct);

module.exports = router;
