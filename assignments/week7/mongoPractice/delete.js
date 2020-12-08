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
