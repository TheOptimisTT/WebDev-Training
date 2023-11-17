
let grades = [100,50,90,60,80,70];
grades = grades.sort(sortDecent);
grades.forEach(print);
grades = grades.sort(sortAsc);
grades.forEach(print);

function sortDecent(x,y){
    return y-x;
}
function sortAsc(x,y){
    return x-y;
}
function print(element){
    console.log(element);
}