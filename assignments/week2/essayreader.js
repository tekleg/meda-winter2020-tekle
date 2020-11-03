// Loads up the Node FS module, so it can be used in this script.
const fs = require("fs");

// process.argv has the command line information that was used to run this script.
let arguments = process.argv;

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

console.log(`The file ${fileName} contains a total of ${letterCount} letters.`);

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" ");

console.log(`It has a total of ${wordArray.length} words in it.`);

// Count Words END

// Count Sentences START

let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {

        
        sentenceCount++;
    }
}

console.log(`It has a total of ${sentenceCount} sentences in it.`);
