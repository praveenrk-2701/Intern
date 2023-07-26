const express = require("express");
const telegramRouter = express.Router();
const telegramSchema = require('./telegramSchema');


telegramRouter.post("/tele", async (req, res) => {
    console.log(req.body);
    var data = new telegramSchema({
        url: req.body.url,
        user_id: req.body.user_id,
        channel_name: req.body.channel_name,
        members_count: req.body.members_count,
        share_count: req.body.share_count,
        description: req.body.description,
        email: req.body.email,
        website: req.body.website,
        phno: req.body.phno
    });

    await data.save();
    res.json(data);
})


// telegramRouter.get("/tele", async (req, res) => {
//     var getData = await telegramSchema.find();
//     res.json(getData);
// })


telegramRouter.get("/teleg", async (req, res) => {
    var search = req.query.search
    
    // console.log(user_id);
    // console.log(members_count);
    telegramSchema.find(
        {
            "$or":
                [{ url: { "$regex": search, "$options": "i" } },
                { user_id: { "$regex": search, "$options": "i" } },
                { channel_name: { "$regex": search, "$options": "i" } },
                { members_count: { "$regex": search, "$options": "i" } },
                { share_count: { "$regex": search, "$options": "i"  } },
                { description: { "$regex": search, "$options": "i" } },
                { email: { "$regex": search, "$options": "i" } },
                { website: { "$regex": search, "$options": "i" } },
                { phno: { "$regex": search, "$options": "i" } }
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


module.exports = telegramRouter;