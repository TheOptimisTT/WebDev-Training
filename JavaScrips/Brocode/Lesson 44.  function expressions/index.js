/*
    function expression =   function without a name (anonymous function)
                            avoid polluting the global scope with name
                            Write it, then forget about it
*/

/*
//normal way
sayHello();
function sayHello(){
    console.log("Hello!");
}


//anotherway
const greeting = function(){
    console.log("Hello!");
}
greeting();
*/

let count = 0;

document.getElementById("iBtn").onclick=function(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("dBtn").onclick=function(){
    count--;
    document.getElementById("myLabel").innerHTML = count;
}