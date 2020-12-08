const mongoose= require("mongoose");
const arguments = process.argv;
//The url that we use to connect to MongoDB aAtlas - replace<Password> with uthe password you create for the connect and replace the db name as well
//mongodb+srv://mongoosePracticeUser:<password>@cluster0.4snjl.mongodb.net/<dbname>?retryWrites=true&w=majority
const db =  "mongodb+srv://mongoosePracticeUser:Eritek20@cluster0.4snjl.mongodb.net/<genericDatabase?retryWrites=true&w=majority";

/// Options for Mongoose current connection.
const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

// We use connect to actually connect to the database. The connect method needs three arguments, URL, options, and callback.
let connection = mongoose.connect(db, options, (error) => {
    
    // Check if MongoDB gave us an error.
    if (error) {
        // If so, console log the error.
        console.log("There was an error!", error);
    } else {
        // If not, say successfully connected to database.
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    }

});



//Grab a copy of what a "Schema" is from the mongoose package.
let Schema = mongoose.Schema;

// Customize our Schema so mongoose knows how the document should be "formatted".
let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

// Create the model for mongoose, we look for a specific collection, and we are going to work with a specific schema.
let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Create a new document and fill it with data. Must match how we designed our schema.
let exampleDocument = new exampleModel({
    username: arguments[2],
    password: arguments[3],
    created: Date.now(),
    age: arguments[4],
    accountClosed: false
});

// CREATE
// callback will run when we get a message from MongoDB.
exampleDocument.save((error) => {

    // We check if we got an error or not and console log accordingly.
    if (error) {
        console.log(error);
        
    } else {
       console.log("Document saved!"); 
    }

    // Once we saved this document, we have the option of closing the connection so we can end this script.
    //mongoose.connection.close();
    
});

/*let secondDocument = new exampleModel({
    username: "Raissa",
    created: "Dec 4, 2020",
    age: 24,
    accountClosed: true,
    nickname: "Ray"
});

secondDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("saved!");
    }
});


setTimeout(() => {
    mongoose.connection.close();
    console.log("connection closed!");
}, 5000);
*/