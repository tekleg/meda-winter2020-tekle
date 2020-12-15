const fs = require("fs");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();
dataArray.pop();

class Title {
    constructor(year, jobCode, title, unionCode, setID, min, max) {
        this.year = year;
        this.setID = setID;
        this.jobCode = jobCode;
        this.title = title;
        this.unionCode = unionCode;
        this.biWeeklyMin = min;
        this.biWeeklyMax = max;
        this.biWeeklyAvg = (min + max) / 2;
        this.steps = [];
    }
}

console.log(dataArray[0]);

const example = dataArray[0].split(",");

console.log(example);

example[3] = example[3] + example[4];

example.splice(4, 1)

// Figure out how to "fix" titles with commas in it, Using positive lookahead.


// Question 1 START
console.log("What Union has the most members?.");


// Question 1 END