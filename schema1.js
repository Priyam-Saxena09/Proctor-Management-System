const mongoose = require("mongoose")
const schema1 = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    id:
    {
        type:String,
        required:true,
        unique:true
    },
    dob:
    {
        type:Date,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    }
})

const proctor = mongoose.model("proctor",schema1)
module.exports = proctor