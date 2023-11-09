// function = Define code once, and use it many times.
//       To perform some code, call the function name.


startProgram();

function startProgram(){
    let userAge=21;
    let userName = "Bro";
    for(let i=0;i<3;i++){
        happyBirthday(userAge,userName);
    }
}
function happyBirthday(age, myName){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear " + myName + "!");
    console.log("Happy birthday to you!");
    console.log("You are " + age + " years old!\n");
}