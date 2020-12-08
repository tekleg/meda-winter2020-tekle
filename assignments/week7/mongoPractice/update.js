const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.rynoa.mongodb.net/genericDatabase?retryWrites=true&w=majority";

const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let connection = mongoose.connect(db, options, (error) => {
    if (error) {
        console.log("There was an error!", error);
    } else {
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    }
});

let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Find a specific document based on the ID, and provide the data we want to update as an object in the second argument, and run a callback function when database responds. Note that the database will return the ORIGINAL document, before it was updated.
exampleModel.findByIdAndUpdate("5fc7e7b4bd203c3e801f6d5f", {age: 32, username: "Eddy"}, (error, results) => {
    if (error) {
        console.log("There was an error.", error);
    } else {
        console.log("Document was update! This is the original document: ", results);
    }
});
