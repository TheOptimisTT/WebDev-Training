/*
Gives us the ability to check more than 1 condition conncurently
&& AND (BOTH conditions must be true)
|| OR (Either condition can be true)
*/

let temp = 15;
let sunny = true;

//AND use
if(temp > 0 && temp < 30){
    console.log("The weather is GOOD");
}else{
    console.log("The weather is BAD");
}

//OR use
if(temp <= 0 || temp >= 30){
    console.log("The weather is BAD");
}else{
    console.log("The weather is GOOD");
}

//Combo
if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is GOOD");
}else{
    console.log("The weather is BAD");
}