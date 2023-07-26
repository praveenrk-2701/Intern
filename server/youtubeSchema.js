const mongoose = require("mongoose");


const youtubeSchema = mongoose.Schema({
    channel_url:{
        type:String,
        required:true
    },
    channel_name:{
        type:String,
        required:true
    },
    about_channel:{
        type:String,
        required:true
    },
    video_title:{
        type:String,
        required:true
    },
    video_link:{
        type:String,
        required:true
    },
    Like_count:{
        type:String,
        required:true
    },
    Dislike_count:{
        type:String,
        required:true
    },
    video_description:{
        type:String,
        required:true
    },
    
    followers:{
        type:String,
        required:true
    },

},{collection:'youtube'})



module.exports = mongoose.model("youtube",youtubeSchema); 