const mongoose = require("mongoose")
const schema2 = new mongoose.Schema({
    usn:
    {
        type:String,
        required:true
    },
    sem:
    {
        type:Number,
        required:true
    },
    year:
    {
        type:Number,
        required:true
    },
    title:
    {
        type:String,
        required:true
    },
    code:
    {
        type:String,
        required:true
    },
    credit:
    {
        type:Number,
        required:true
    },
    att:
    {
        type:Number,
        required:true
    },
    cie:
    {
        type:Number,
        required:true
    },
    see:
    {
        type:Number,
        required:true
    }
})

const record = mongoose.model("record",schema2)
module.exports = record