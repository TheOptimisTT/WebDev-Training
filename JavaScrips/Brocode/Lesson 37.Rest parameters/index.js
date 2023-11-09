/*
    rest parameters = represents an indefinite number
                    of parameters
                    (packs  arguments into an array)
                    ...
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c));

//We need a function that can accept different amount of arguments
// sum(2,3) and sum(2,3,4,5)
function sum(...numbers){//(packs  arguments into an array)
    let total = 0;
    for(let number of numbers){//we need a way to access the parameters
        total+=number;
    }
    return total;
}
function sumMatch(x,y,...numbers){}
// we can do that too where the func needs at least 3 parameters