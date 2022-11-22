const path = require('path');
const Product = require('../models/product')
const rootDir = require('../util/path');



exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }


exports.postProduct =  (req, res, next) => {
  const product = new Product(req.body.title);
  product.save()
    res.redirect('/');
  }

  exports.getProduct = (req, res, next) => {
    const product = Product.fetchAll();
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }