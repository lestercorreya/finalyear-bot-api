const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    destination:{
        type:String,
        required:true
    },
    routes:[{
        S:{
            type:Number,
            required:true
        },
        L:{
            type:Boolean,
            required:true
        },
        R:{
            type:Boolean,
            required:true
        }
    }]
})

const Trip = mongoose.model('Trip',tripSchema);
module.exports = Trip;