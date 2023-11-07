// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

//Two steps:
// 1. Declaration (var, let /*best practice*/ , const)
// 2. Assignment (= assignment operator)


//number datatype
let age; // step 1 Declaration
age = 21; // step 2 Assignment
let age2 =31; // step1 + step2
age = age+1;

//String datatype
let firstName="Bro"; // "" or ''
firstName = firstName + " Code";
//boolean dt
let student = true; // true or false


console.log("Hello ",firstName);
console.log("You are ", age,"years old");
console.log("Enrolled: ",student);


//manupulating the DOM usuing a <p> with ID

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;