/*
    arrow function = compact alternative to a traditional function
    =>
    Syntax const name = (arguments) => {body};
*/

//Normal way
const greeeting = function(userName){
    console.log(`hello ${userName}`);
}
greeeting("Bro");

//Compact alternative

const greeting = (userName) => console.log(`hello ${userName}`);
//----------------------------------------

const percent = function(x,y){ //Function expression
    return x/y*100
}

const percent2 = (x,y) =>  x/y*100; //Arrow Function
 //-------------------------------------

 let grades = [100,50,90,60,80,70];
 grades.sort(desc);
 grades.forEach(print);

 function desc(x,y){
    return y-x;
 }
 function print(element){
    console.log(element);
 }
//new way 
grades = [100,50,90,60,80,70];

grades.sort((x,y)=>y-x);
grades.forEach(element =>console.log(element));