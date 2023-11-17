/*
    if statement = a basic form of decision making
        if a condition is true, then do something
        if not, then don't do it!

        if(boolean){

        }else if(boolean){

        }else{

        }
*/

let age = 21;


if(age >= 18){
    console.log("You are an adult!");
}else if(age < 0){
    console.log("You haven't been born yet!");
}else if(age >= 65){
    console.log("You are a senior")
}
else{
    console.log("You are a child!");
}

let online = false; // boolean use

if(online){
    console.log("you are online");
}else{
    console.log("You are offline");
}