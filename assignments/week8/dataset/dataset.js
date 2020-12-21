const fs = require("fs");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rates.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();
dataArray.pop();

titleArray = [];

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    let fixedEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixedEntry[1], fixedEntry[2], fixedEntry[3], fixedEntry[4], fixedEntry[5], parseInt(fixedEntry[7]), parseInt(fixedEntry[8]));
    titleArray.push(entryTitleObject);
}


// Figure out how to "fix" titles with commas in it, Using positive lookahead.


// Question 1 START
console.log("What Union has the most members?");

let unions = {};

titleArray.forEach(function (element) {
    let currentUnion = element.unionCode.toString();
    let currentYear = element.year;
    let currentYearArray = currentYear.split("/");

    if (currentYearArray[0] === "2018") {
        if (unions[currentUnion] === undefined) {
            unions[currentUnion] = 1;
        } else {
            unions[currentUnion] += 1;
        }
    }    
});

let highestUnionMemberCount = 0;
let highestUnionCode = null;

for (let i in unions) {
    if (unions[i] > highestUnionMemberCount) {
        highestUnionMemberCount = unions[i];
        highestUnionCode = i;
    }
}

console.log(`The Union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount} for the year of 2018.`);

// Question 1 END


// Question 2 START
console.log("What Job Title pays the most within each union code?");

let highestUnionPay = [];
/*

[
    {
        unionCode: 352,
        highest: 12574,
        title: "Chief of Department"
    },
    {
        unionCode: 220,
        highest: 6808,
        title: "Law Librarian"
    }
]

*/


titleArray.forEach(function (job) {

    let jobYear = job.year.split("/")[0];
    
    if (jobYear === "2012") {

        let found = false;

        highestUnionPay.forEach(function (unionCounter) {

            if (unionCounter.unionCode === job.unionCode) {

                found = true;

                if (job.biWeeklyAvg > unionCounter.highest) {
                    unionCounter.highest = job.biWeeklyAvg;
                    unionCounter.title = job.title;
                } 

            }

        });

        if (!found) {
            highestUnionPay.push({
                unionCode: job.unionCode,
                highest: job.biWeeklyAvg,
                title: job.title
            });
        }

    }

});

let orderedUnionPay = highestUnionPay.sort(function (a, b) {
    if (a.unionCode > b.unionCode) {
        return 1;
    } else if (a.unionCode < b.unionCode) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 0; i <  orderedUnionPay.length; i++) {
    let currentUnion = orderedUnionPay[i];

    console.log(`The highest paying job in 2018 for the Union with code ${currentUnion.unionCode} is ${currentUnion.title} with an biWeekly income of $${currentUnion.highest}.`);
}

// Question 2 END

// Question 3 START

console.log("How many new jobs in SFMTA did we have each year? How many were lost?");

/*
[
    {
        year: 2012,
        jobCount: 35
    },
    {
        year: 2013,
        jobCount: 36
    }
]
*/

let jobCountArray = [];

titleArray.forEach(function (job) {

    if (job.setID === "SFMTA") {

        let jobYear = job.year.split("/")[0];

        let found = false;

        jobCountArray.forEach(function (jobCounter) {
            
            if (jobYear === jobCounter.year) {
                jobCounter.jobCount++;
                found = true;
            }

        });

        if (!found) {
            jobCountArray.push({
                year: jobYear,
                jobCount: 1
            });
        } 

    }

});



let orderedJobArray = jobCountArray.sort(function (a, b) {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 1; i < orderedJobArray.length; i++) {

    let year = orderedJobArray[i].year;
    let jobCount = orderedJobArray[i].jobCount;
    let prevJobCount = orderedJobArray[i -1].jobCount;
    
    let adjective;
    let difference = jobCount - prevJobCount;

    if (jobCount > prevJobCount) {
        adjective = "gained";
    } else {
        adjective = "lost";
        difference = Math.abs(difference);
    }

    console.log(`For the year ${year}, we ${adjective} ${difference} jobs.`);

}

// Question 3 END






// (n)^2
// for () {

//     for () {

//     }

// }

// 2(n)
// for () {}

// (n)
// for () {}