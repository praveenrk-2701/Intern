const mongoose = require("mongoose");


const upiSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    bank_name:{
        type:String,
        required:true
    },
    Ifsc_code:{
        type:String,
        required:true
    },
    recipient_name:{
        type:String,
        required:true
    },
    recipient_id:{
        type:String,
        required:true
    },
    recipient_bank:{
        type:String,
        required:true
    },
    recipient_ifsccode:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    
    recipient_phno:{
        type:String,
        required:true
    },

},{collection:'upi'})



module.exports = mongoose.model("upi",upiSchema); 