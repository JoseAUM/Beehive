var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Pase por aqui, bueno chao.")
    //res.render("index");
});

module.exports = router;