
const express = require('express');
const controller = require('../controller/adminController')

const router = express.Router();

router.get('/', controller.getProduct);

module.exports = router;
