const path = require('path');

const express = require('express');

const routes = express.Router();


routes.get('/add-product' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

routes.post('/product',(req,res)=>{
    console.log(req.body.title,req.body.value);
    // res.send(req.body)
    res.redirect('/')
})

module.exports = routes