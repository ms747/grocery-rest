const mongoose = require('mongoose');

const gocerySchema  = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
})


const gocery = mongoose.model("Grocery",gocerySchema);

module.exports = gocery;