const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    destination:{
        type:String,
        required:true
    },
    coordinates:{
        type:String,
        required:true
    }
})

const Trip = mongoose.model('Trip',tripSchema);
module.exports = Trip;