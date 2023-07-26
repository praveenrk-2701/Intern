
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const router = require('./router');
const twitterRouter = require('./twitterRouter');
const telegramRouter = require('./telegramRouter');
const youtubeRouter = require("./youtubeRouter");
const upiRouter = require("./upiRouter");
 
app.use(express.json());
app.use(cors());

app.use('/api',router);
app.use('/api',twitterRouter);
app.use('/api',telegramRouter);
app.use('/api',youtubeRouter);
app.use('/api',upiRouter);


// app.use("/",( req,res)=>
// {
//     res.json("hello");
// })

//Listen port
app.listen(3001,() => {
    console.log("Server Started On 3001"); 
})

//Db.Connection
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/dashboard",
{useNewUrlParser: true},(err) => {
    if(!err)
    {
        console.log("Db Connected ");
    }
})