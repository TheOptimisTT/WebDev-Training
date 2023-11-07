// Type Conversion = Change the datatype of a value to another
// (String, number, booleans)


/*
let age = window.prompt("How old are you? "); //String 

console.log(typeof age);//checks type
age = Number(age); //Number constructior
console.log(typeof age);//checks type
age += 1 ; // int age +1


console.log("Happy Birthday! You are ", age, " years old");
*/

let x;
let y;
let z;

x = Number("3.14"); // Convert String("3.14") to a Number(3.14) 
console.log(x, typeof x);

y= String(3.14);//Converts Number to String
console.log(y, typeof y); 

z = Boolean("") //Converts String to Boolean, Default is False!
                // anything else (not empty string) will be True!
    // This can be used for checking if the user entered something in a field
console.log(z, typeof z); 
