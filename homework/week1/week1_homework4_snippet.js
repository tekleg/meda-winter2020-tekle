// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // On left side, let is a javaScript keyword used to declare a variable of product. One the right side, after multipling the value of option & opition2 is done the values store to the product  variable
    let product = option * option2;

    //console.log function() used to print the value of the predefined variable of product. so  console.log(product) is print the value of the product  
    console.log(product);

    // This console.log() print the string under the double quotes as it's  and the value of  option
    console.log("The value of the option parameter is " + option);


    // This is depend of the type and value of the option.  Check if the type and the value  of the option is 0 .   If the type and the value is same, if statement will be true. If the type and the value is different   the if statement will be false.  
    if (option === 0) {

        
        // The type and  value  of the option is equal.  that means  0 === 0
        return "Everything is good!";


    // check if the type of option actual number and its value is 1
    } else if (option === 1) {
        

        // The type of the option is not a number. It might be string or boolean or other 
        return "An error happened!";

    // check if the type of the option is number and its value is -1
    } else if (option === -1) {
        

        // The type and value of the option is totaly not -1
        return "Everything is bad!";
    }

}

// option & option2 are the two parameters of the function  1 & 11 are respectively the two arquments of the function. That mean option refers to 1   &  option2 is refers to 11
let result = myFunction(1, 11);


//option & option2 are the two parameters of the function  2 & 200 are respectively the two arquments of the function. That mean option refers to 2   &  option2 is refers to 200
let result2 = myFunction(2, 200);

// In result  and result2 One or both of their  arqument is/are not number
if ( result === "An error happened" && result2 === "An error happened") {

    // no print excuted because of error due to the type or value error
    console.log("Catastrophic failure.");

}