/*
    spread operator = allows an iterable such as an 
                    array or string to be expanded
                    in places where zero or more
                    arguments are expected
                    (unpacks the elements)
                    ... ->syntax
*/

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
/* console:
[
    1, 2, 3, 4, 5,
    6, 7, 8, 9
]
*/
console.log(...numbers);
/* console:
    1 2 3 4 5 6 7 8 9
*/
let userName = "Josh";
console.log(userName); //Josh
console.log(...userName); //J o s h

// How can this be useful ?
    //Math.max(x,y,z); we can't stick in an array here because NaN
let maximum = Math.max(...numbers);
console.log("max: ",maximum); //max: 9

    //another example
let class1 = ["Spongebob","Patrick","Sandy"];
let class2 = ["Squidward","Mr.Krabs","Plankton"];
class1.push(class2);//merges the classes
console.log(...class1);
/*
    if we don't use the ... method,
    we will add the entire array as Array(3)
        a.k.a   [
                'Spongebob',
                'Patrick',
                'Sandy',
                [ 'Squidward', 'Mr.Krabs', 'Plankton' ]
                ]
    We usually dont want this, but if we want this we can still
    show all the elements with console.log(...class1) for this:
            Spongebob Patrick Sandy [ 'Squidward', 'Mr.Krabs', 'Plankton' ]
*/

