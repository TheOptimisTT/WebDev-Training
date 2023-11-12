/*
    The idea behind a module is that it's a file of reusable code
    We can import sections of pre-written code to use whenever 
    Great for any general utility values and functions
    Helps to make your code more reusable and maintanable
    Think of modules as seperate chapters of a book
*/

//import {PI,getCircumference,getArea} from "./math_util.js"
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);
let circum = MathUtil.getCircumference(10);
console.log(circum);
let area = MathUtil.getArea(10);
console.log(area);