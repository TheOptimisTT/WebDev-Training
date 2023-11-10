/*
    array.forEach() = executes a provided callback function
                    once for each array element
*/

let students = ["spongebob","patrick","squidward"];

students.forEach(capitalize); //Only passing the name of the func as an argument no ()
students.forEach(print);

function capitalize(element,index, array){
    array[index] = element[0].toUpperCase()+element.substring(1);
    //Capitalizes every elements first letter
}
function print(element){
    console.log(element);
}
