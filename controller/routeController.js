const path = require('path');

const addProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}

const product = (req,res)=>{
    console.log(req.body.title,req.body.value);
    // res.send(req.body)
    res.redirect('/')
}

const shop = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
    }
module.exports = {
    addProduct,
    product,
    shop
}