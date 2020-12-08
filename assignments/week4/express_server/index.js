//Bring in the express package.
const express = require("express");

//Bring in the FS package.
const fs = require("fs");

// Object to hold all submission history for /sayHello
let history = {
    submissions: []
};

// Check if the history.json file exists.
if (fs.existsSync("history.json")) {

    // If it does exists, read it and load it into history variable.
    let string = fs.readFileSync("history.json", "utf-8");
    history = JSON.parse(string);
    console.log("History file found and loaded!");

} else {

    // If it doesn't exists, convert history into JSON and save it to history.json.
    let json = JSON.stringify(history);
    fs.writeFileSync("history.json", json, "utf-8");
    console.log("History file not found! Creating a new one.");

}

// Brings in the body-parser package.
const bodyParser = require("body-parser");

//Run a copy of the express module.
const app = express();

//Connects our HTTP server with the Express web module.
const http = require("http").Server(app);

// Decide on the port number to listen on when running Express server.
// DO NOT USE 80, 443, 20, 21, 22, etc.
const port = 3000;

// Tell http module that we will be listening on the number in the port variable.
http.listen(port);

// Body Parser so we can automatically convert request objects.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Express server is now running on " + port);


// Express Routes

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/"));

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));


// Handling any POST requests with the name of "sayHello".
// We have the request and response parameters in our callback function to have a reference of where to get and send data.
app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");

    // Generate random number between 1 and 10.
    let winningNumber = Math.floor((Math.random() * 10) + 1);

    // Get object sent from the front-end.
    let dataFromFront = request.body;

    // Get number out of fron-end object and convert it to a JavaScript number.
    let userNumberChoice = parseInt(dataFromFront.number);

    // Create a save entry for our history object.
    let historyEntry = {
        number: userNumberChoice,
        winningNumber: winningNumber,
        timestamp: Date.now()
    };

    // Place entry in our history object.
    history.submissions.push(historyEntry);

    // Save the history object as a JSON file.
    fs.writeFileSync("history.json", JSON.stringify(history), "utf-8");


    // By default: you don't win, and your number is not out of range.
    let userWinner = false;
    let outOfRange = false;

    console.log(winningNumber, userNumberChoice);

    // Compare generated number and the number the user picked and see if they match.
    if (winningNumber === userNumberChoice) {
        // If they match, set the userWinner variable to true.
        userWinner = true;
    }

    // Check if the number is outside of the range of 1-10.
    if (userNumberChoice <= 0 || userNumberChoice >= 11) {
        // If it is, set the outOfRange variable to false.
        outOfRange = true;
    }

    // Build an object to send back to whoever requested this specific POST method.
    let responseObject = {
        results: userWinner,
        error: outOfRange
    };

    // Send the object to the requester.
    response.send(responseObject);
});

app.post("/getPreviousEntries", (req, res) => {
    let sliceArray = history.submissions.slice(history.submissions.length - 11);
    console.log(sliceArray);
    let dataToSendBack = {
        latestEntries: history.submissions
    };

    res.send(dataToSendBack);

});