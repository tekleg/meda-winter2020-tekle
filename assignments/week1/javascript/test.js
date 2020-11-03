count = 0;

let myObj = {
    number: 10
};

let number = "number1";

count += (myObj[number] || 0);

if (typeof myObj[number] == "number") {
    count += myObj[number];
}

console.log(count);



function addTwoNumber() {
    return argument[0] + argument[1];
}


setTimeout(() => {return argument[0] + argument[1];}, 1000);