const fs = require("fs");

let string = "Hello there how are you";

fs.writeFileSync("example.txt", string, "utf-8");

console.log(fs.readFileSync("example.txt"));
console.log(fs.readFileSync("example.txt", "utf-8"));