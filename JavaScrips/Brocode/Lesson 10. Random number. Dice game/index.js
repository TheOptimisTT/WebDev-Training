//Generates a random number between 0 and 1
    //let x = Math.random(); 

//Random 0.0-5.0 aka 0.648227...
    //let x = Math.random() * 6; 

// Random 0-5
    //let x = Math.floor(Math.random()*6);

// Random 1-6
    //let x = Math.floor(Math.random()*6)+1;

let x;
let y;
let z;

document.getElementById("rollBtn").onclick = function (){
    x = Math.floor(Math.random()*6)+1;
    y = Math.floor(Math.random()*6)+1;
    z = Math.floor(Math.random()*6)+1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
    
}