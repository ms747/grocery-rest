require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groceryRoute = require('./endpoints/grocery');
const mongoose = require('mongoose');


// Mongodb connection
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds117489.mlab.com:17489/grocery`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connection was successfull");
    }
});

// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}))

// Routes
app.use('/grocery',groceryRoute);

// Server
app.listen(3000,()=>{
    console.log("running");
})