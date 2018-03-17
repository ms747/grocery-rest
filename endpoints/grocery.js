const express = require('express');
const router = express.Router();
const Grocery = require('../schemas/grocerySchema');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    const items = Grocery.find({},'name price -_id',(err,allitems) => {
        res.status(200);
        res.json({
            message : allitems
        });
    });
});

router.post('/', (req,res,next)=>{
    const item = new Grocery({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    item.save((err)=>{
        if (err)
        {
            throw err;
        }
        res.status(200).json({message:"Inserted"});
    })
});


module.exports = router;