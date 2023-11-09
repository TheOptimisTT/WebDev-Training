/*
    variable scope = where a variable is accessible

    let = variables are limited to block scope {}
    var = variables are limited to a function(){}

    global variable = is declared outside any function
        if global , var will CHANGE browser's window properties
        let will not change browsers prop!
        its a good practice to use LET not VAR
*/

for(var i = 1;i <= 3; i++){
    console.log(i);
}
//console.log(i); ERROR ->let i is not defined
console.log(i); // Passes -> var i=4

doSomething();
function doSomething(){
    //Var can escape {} but it can't escape a Function!
    for(var j = 1;j <= 3; j++){
        console.log("j =",j);
    }
}
//console.log("j=",j); ReferenceError: j is not defined