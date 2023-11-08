/*
    Switch = statement that examines a value
    for a match against many case clauses
    More efficient than many "else if" statements
*/

let grade = "A";

//else if way
if(grade == "A"){
    console.log("You did great!");
}else if(grade == "B"){
    console.log("You did good!");
}else if(grade == "C"){
    console.log("You did OK!");
}else if(grade == "D"){
    console.log("You passed!");
}else if(grade == "F"){
    console.log("You Failed!");
}else{
    console.log("Not a valid GRADE!");
}

//switch way
switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did OK!");
        break;
    case "D":
        console.log("You passed!");
        break;
    case "F":
        console.log("You Failed!");
        break;
    default:
        console.log("Not a valid GRADE!");
}


// case can use a condition!
let newGrade = 95;
switch(true){
    case newGrade>=90:
        console.log("You did great!");
        break;
    case newGrade>=80:
        console.log("You did good!");
        break;
    case newGrade>=70:
        console.log("You did OK!");
        break;
    case newGrade>=60:
        console.log("You passed!");
        break;
    case newGrade<60:
        console.log("You Failed!");
        break;
    default:
        console.log("Not a valid GRADE!");
}