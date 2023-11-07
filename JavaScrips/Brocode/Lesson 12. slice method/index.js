/*
    slice() extracts a section of a string
    and returns it as a new string,
    without modifying the original string
*/

let fullName = "Bro Code";
let firstName;
let lastName;

/*
 2 values. Start index and end index.
 If you add only a Starting value JS assumes 
 the end of the string for the End value
*/

lastName = fullName.slice(4);
console.log(lastName);

firstName = fullName.slice(0,3);
console.log(firstName);

//proper way of using slice()
firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

