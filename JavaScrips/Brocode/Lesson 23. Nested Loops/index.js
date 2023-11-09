// nester loop = a loop inside of another loop

let rows = window.prompt("Enter number of rows");
let cols = window.prompt("Enter number of cols");
let symbol = window.prompt("Enter symbol")

for(let i=1; i<=rows; i+=1){
    for(let j=1; j<=cols; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    } 
    document.getElementById("myRectangle").innerHTML += "<br>";
}   