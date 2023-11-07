// Useful string properties and methods



let userName = "  Bro Code  ";
let phoneNumber = "123-456-7890";

//number of chars
let nameLength = userName.length; 

//returns the index of set character
let firstLetter = userName.charAt(0);

//finds the first occurance of sex characer
let findFirst_o = userName.indexOf("o");

//finds the last occurance of sex characer
let findLast_o = userName.lastIndexOf("o")

//removes all the extra spaces before and after the string
userName = userName.trim; 

// all Upper Case
userName =userName.toUpperCase;

// all to Lower case
userName = userName.toLowerCase;

//replaces all the - with /
phoneNumber = phoneNumber.replaceAll("-","/");
