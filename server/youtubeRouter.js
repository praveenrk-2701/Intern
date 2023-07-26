const express = require("express");
const youtubeRouter = express.Router();
const youtubeSchema = require('./youtubeSchema');


youtubeRouter.post("/you",async(req,res)=>{
    console.log(req.body);
    var data = new youtubeSchema({
        channel_url:req.body.channel_url,
		channel_name:req.body.channel_name,
        about_channel:req.body.about_channel,
		video_title: req.body.video_title,
		video_link: req.body.video_link,
		Like_count: req.body.Like_count,
		Dislike_count: req.body.Dislike_count,
        video_description: req.body.video_description,
		followers:req.body.followers
    });
    
    await data.save();
    res.json(data);
})


// youtubeRouter.get("/you",async (req,res) => {
//     var getData =await youtubeSchema.find();
//     res.json(getData); 
// })



youtubeRouter.get("/you", async (req, res) => {
    var search = req.query.search
    
    
    youtubeSchema.find(
        {
            "$or":
                [{ channel_url: { "$regex": search, "$options": "i" } },
                { channel_name: { "$regex": search, "$options": "i" } },
                { about_channel: { "$regex": search, "$options": "i" } },
                { video_title: { "$regex": search, "$options": "i" } },
                { video_link: { "$regex": search, "$options": "i"  } },
                { Like_count: { "$regex": search, "$options": "i" } },
                { Dislike_count: { "$regex": search, "$options": "i" } },
                { video_description: { "$regex": search, "$options": "i" } },
                { followers: { "$regex": search, "$options": "i" } }
            ]

        }, function (err, result) {
            if (err) {
                console.log('Not a Valid Search');
                res.status(500).send(err, 'Not a Valid Search');
            } else {
                res.json(result);
            }
        });
}
)

module.exports = youtubeRouter;