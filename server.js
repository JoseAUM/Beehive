var express = require("express");
var path = require("path");

var routes = require("./routes");

var server = express();

server.set("port", process.env.PORT || 3000);
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(routes);

server.listen(server.get("port"), function(){
    console.log("Esta vivo! Esta vivooooo!!! en el puerto " + server.get("port"));
});