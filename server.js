var express = require("express");
var path = require("path");

var routes = require("./routes");

var server = express();

server.set("port", process.env.PORT || 3000);

server.use(routes);

server.listen(server.get("port"), function(){
    console.log("Esta vivo! Esta vivooooo!!! en el puerto " + server.get("port"));
});