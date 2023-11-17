//var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
let name = superheroes.random();

console.log(`My name is ${name}!`);
