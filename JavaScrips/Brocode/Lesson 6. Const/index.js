// Const = a variable that can't be changed. 
    // adds security to our code
    
//We will write a math program with and without consts


//Example 1. No Constants.

/*
let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

    //lets say somebody changes our code
pi = 420.69;
    // now the circumference is wrong 
circumference = 2*pi*radius;

console.log("The circumference is: ", circumference);
*/

const PI = 3.14159; // common naming convention is naming consts with CAPSLOCK
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

                //lets say somebody changes our code
    PI = 420.69;//we get an error because PI can not be changed! (TypeError)
    
circumference = 2*PI*radius;

console.log("The circumference is: ", circumference);