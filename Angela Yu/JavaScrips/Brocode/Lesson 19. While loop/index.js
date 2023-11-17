// While loop = repeat some code
//              while some condition is true
//              potentioally infinite

let userName = "";

while(userName == "" || userName == null){ // Locks you in a while loop till you change the username
    userName=window.prompt("Enter your name");
}
console.log("Hello", userName);

//infinite loop

while(1==1){
    console.log("Help!");
}