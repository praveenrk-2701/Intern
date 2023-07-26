const mongoose = require("mongoose");
// const router = require("./router");

const telegramSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    channel_name:{
        type:String,
        required:true
    },
    members_count:{
        type:String,
        required:true
    },
    share_count:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    phno:{
        type:Array,
        required:true
    },

},{collection:'telegram'})



module.exports = mongoose.model("telegram",telegramSchema); 