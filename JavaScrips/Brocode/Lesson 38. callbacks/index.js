/*
    callback = a function passed as an argument
                to another function.

    Ensures that a function is not going 
    to run before a task is completed
    Helps us develop asynchronous code.
    (When one function has to wait for another function)
    that helps us avoid errors and potential problems
    Example: Wait for a file to load
*/

/* NO CALLBACK

    let total = sum(2,3);
    displayDOM(total);

    function sum(x,y){
        let result = x+y;
        return result;
    }
*/

//With CALLBACK

sum(2,3,displayDOM);

function sum(x,y,callBack){ //we MUST NOT add the ()
    let result = x+y;
    callBack(result); //invoking the function with its parameters
}

function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
