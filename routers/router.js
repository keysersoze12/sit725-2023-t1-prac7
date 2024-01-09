let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postArsenal(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllArsenals(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllArsenals(req,res);
});


module.exports = router;