const express = require("express");
const twitterRouter = express.Router();
const twitterSchema = require('./twitterSchema');


twitterRouter.post("/tweet",async(req,res)=>{
    console.log(req.body);
    var data = new twitterSchema({
        url:req.body.url,
		tweet_link:req.body.tweet_link,
        user_id:req.body.user_id,
		hastag: req.body.hastag,
		retweet_count: req.body.retweet_count,
		share_count: req.body.share_count,
		description: req.body.description,
        following : req.body.following,
		followers:req.body.followers
    });
    
    await data.save();
    res.json(data);
})


// twitterRouter.get("/tweet",async (req,res) => {
//     var getData =await twitterSchema.find();
//     res.json(getData); 
// })



twitterRouter.get("/twet", async (req, res) => {
    var search = req.query.search
    
    // console.log(user_id);
    // console.log(members_count);
    twitterSchema.find(
        {
            "$or":
                [{ url: { "$regex": search, "$options": "i" } },
                { tweet_link: { "$regex": search, "$options": "i" } },
                { user_id: { "$regex": search, "$options": "i" } },
                { hastag: { "$regex": search, "$options": "i" } },
                { retweet_count: { "$regex": search, "$options": "i"  } },
                { share_count: { "$regex": search, "$options": "i" } },
                { description: { "$regex": search, "$options": "i" } },
                { following: { "$regex": search, "$options": "i" } },
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

module.exports = twitterRouter;