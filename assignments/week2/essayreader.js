// Loads up the Node FS module, so it can be used in this script.
const fs = require("fs");

const timeNow = new Date(Date.now());

// console.log(timeNow.getHours());
// console.log(timeNow.getMinutes());

// process.argv has the command line information that was used to run this script.
let arguments = process.argv;


let history;

// Check if we have an existing file called "history.txt"
if (fs.existsSync("history.txt")) {
    // .. If it does find, read it and load it into the variable history.
    history = fs.readFileSync("history.txt", "utf-8");
} else {
    // .. if it doesn't, we create the file, and write an empty to it.
    fs.writeFileSync("history.txt", "", "utf-8");
    history = "";
}

// console.log(arguments);

let fileName = arguments[2];

// console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("Sorry, that file doesn't exist! Check your filepath.");
    return;
}

// This method allows us to read a file.
let fileContents = fs.readFileSync(fileName, "utf-8");

// console.log(fileContents);

// Count Letter START
let contentArray = fileContents.split("");

// console.log(contentArray);

let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;
    } else {
        letterCount++;
    }

}

let firstSentence = `The file ${fileName} contains a total of ${letterCount} letters.`;

console.log(firstSentence);

history = `${history}${fileName} ${timeNow.toDateString()} ${timeNow.toTimeString()}\n\n`;

// same as history = history + firstSentence;
history += firstSentence;

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" ");

let secondSentence = `It has a total of ${wordArray.length} words in it.`;

console.log(secondSentence);

history = history + "\n" + secondSentence;

// Count Words END

// Count Sentences START

let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {

        
        sentenceCount++;
    }
}

let thirdSentence = `It has a total of ${sentenceCount} sentences in it.`;

let exampleURL = "http://www.google.com/";

console.log(thirdSentence);

history = history + "\n" + thirdSentence + "\n\n";

// Save the string in the history variable to the file.

console.log("");
console.log("Statistics saved to history!")
fs.writeFileSync("history.txt", history, "utf-8");
