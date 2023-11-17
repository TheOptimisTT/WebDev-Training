/*
array = think of it as a variable
        that can store multiple values
*/

let fruits = ["apple", "orange","banana"];
fruits[0]="coconut";
fruits.push("lemon");//add an element

fruits.push("lemon");//add an element as Last
fruits.pop();//removes last element

fruits.unshift("mango"); // adds an element as First[0]
fruits.shift();//removes the first element[0]

let length = fruits.length;// array length

// returns the index of set element or -1 if its not found
let index = fruits.indexOf("apple");

console.log(fruits[0]);