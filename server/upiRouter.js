const express = require("express");
const upiRouter = express.Router();
const upiSchema = require('./upiSchema');


upiRouter.post("/upi",async(req,res)=>{
    console.log(req.body);
    var data = new upiSchema({
        url:req.body.url,
		bank_name:req.body.bank_name,
        Ifsc_code:req.body.Ifsc_code,
		recipient_name: req.body.recipient_name,
		recipient_id: req.body.recipient_id,
		recipient_bank: req.body.recipient_bank,
		recipient_ifsccode: req.body.recipient_ifsccode,
        phno: req.body.phno,
		recipient_phnno:req.body.recipient_phnno
    });
    
    await data.save();
    res.json(data);
})


// upiRouter.get("/upi",async (req,res) => {
//     console.log(req);
//     var getData =await upiSchema.find();
//     res.json(getData); 
// })



upiRouter.get("/upii", async (req, res) => {
    var search = req.query.search
    
    
    upiSchema.find(
        {
            "$or":
                [{ url: { "$regex": search, "$options": "i" } },
                { bank_name: { "$regex": search, "$options": "i" } },
                { Ifsc_code: { "$regex": search, "$options": "i" } },
                { recipient_name: { "$regex": search, "$options": "i" } },
                { recipient_id: { "$regex": search, "$options": "i"  } },
                { recipient_bank: { "$regex": search, "$options": "i" } },
                { recipient_ifsccode: { "$regex": search, "$options": "i" } },
                { phno: { "$regex": search, "$options": "i" } },
                { recipient_phnno: { "$regex": search, "$options": "i" } }
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


module.exports = upiRouter;