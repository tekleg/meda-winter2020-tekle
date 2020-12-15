const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const credentials = require("./credentials.js");

const dbCredentials = credentials.dbURL;
const dbOptions = { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true };
let dbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error: " + error);
    } else {
        console.log("MongoDB connection opened.");
    }
});

let todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    completed: Boolean,
    archived: Boolean,
    priority: Number,
    timestamp: Number
});

let todoModel = new mongoose.model("notecollections", todoSchema);

const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Express server is running on port " + port);

app.use("/", express.static("client/"));

app.post("/newNote", (request, response) => {

    const note = request.body;

    // Sanitize Inputs

    let newNoteDocument = new todoModel({
        title: note.title,
        text: note.text,
        completed: (note.completed === "true"),
        archived: (note.archived === "true"),
        priority: parseInt(note.priority),
        timestamp: parseInt(note.timestamp)
    });

    newNoteDocument.save((error) => {

        const responseObject = {
            saved: false,
            error: null
        };

        if (error) {
            response.send(responseObject);
        } else {
            responseObject.saved = true;
            response.send(responseObject);
        }
    });
});
app.post("/getlist", (request, response) => {
    //goback to database todo
    todoMode.find({ }, (error, results) => {
        const responseObject = {
            list: results,
            error: null
        };
        if(error) {
            console.log(" failed to read database.");
        } else{
            response.sendStatus(responseObject);
        }

    });
});