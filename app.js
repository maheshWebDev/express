const express = require('express');

const path = require('path');

const shopRoutes = require('./routes/shop')

const adminRoutes = require('./routes/admin')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);

app.use(shopRoutes)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})
 
app.listen(3000,()=>{
    console.log("server is running...");
})