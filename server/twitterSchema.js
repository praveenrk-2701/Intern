const mongoose = require("mongoose");
// const router = require("./router");

const twitterSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    tweet_link:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    hastag:{
        type:String,
        required:true
    },
    retweet_count:{
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
    following:{
        type:String,
        required:true
    },
    followers:{
        type:String,
        required:true
    },

},{collection:'twitter'})



module.exports = mongoose.model("twitter",twitterSchema); 