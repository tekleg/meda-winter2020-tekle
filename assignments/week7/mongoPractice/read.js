const mongoose= require("mongoose");
 
const db =  "mongodb+srv://mongoosePracticeUser:Eritek20@cluster0.4snjl.mongodb.net/<genericDatabase?retryWrites=true&w=majority";

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

// Read from firstcollections collection. The first argument is the "search parameters", the second argument will run when we get a response, the database will return an error or results.
exampleModel.find({age: 20}, (error, results) => {
  //find age with 20 if you so go to display the callback with error or result
    if (error) {
        console.log("There was an error reading the database.", error);
    } else {
        console.log("Successfully read the database.");
        console.log("We found something!", results);
    }
});