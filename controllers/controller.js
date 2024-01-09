let collection = require('../models/invincible');

const postArsenal = (req,res) => {
    let invincible = req.body;
    collection.postArsenal(invincible, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllArsenals = (req,res) => {
    collection.getAllArsenals((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteArsenal = (req,res) => {
    let invincible = req.body;
    collection.deleteOne(invincible, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postArsenal,getAllArsenals}