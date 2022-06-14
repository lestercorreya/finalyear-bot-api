const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const layoutSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rows:{
        type:String,
        required:true
    },
    columns:{
        type:String,
        required:true
    },
    obstacles:{
        type:Array,
        required:true
    }
})

const Layout = mongoose.model('Layout',layoutSchema);
module.exports = Layout;