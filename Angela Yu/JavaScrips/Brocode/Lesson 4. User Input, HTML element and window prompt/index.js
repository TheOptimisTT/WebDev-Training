// How to accept User Input

// EASY WAY with a Window Prompt

let username = window.prompt("What's your name?");
console.log(username);

//Difficult way HTML textbox

document.getElementById("myButton").onclick= function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}