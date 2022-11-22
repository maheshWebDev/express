const path = require('path');
const controller = require('./controller/error')
const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(controller.error);

// const port = process.env.PORT || 8000;
app.listen(3000,()=>{
    console.log("server is running...!")
});
