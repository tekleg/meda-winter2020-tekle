// Bring in the express package
const express = require("express");

//run a copy of express package
const app = express();
// the http module is does not need to install it comes with the node like fs

//connects our http server with the express web module
const http = require("http").Server(app);

//Decide on the port number to listen on when running express server.
//Don't use 80, 443, 20, 21, 22, etc.
const port = 3000;

// Tell http module that we will be listening on the number in the port variable.
http.listen(port);

console.log("Express server is now running on " + port);

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
//app.use("/", express.static("public_html/"));

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));