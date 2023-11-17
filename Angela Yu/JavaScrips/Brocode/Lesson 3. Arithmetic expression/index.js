/*
    arithmeic expression is a combination of...
    operands(values, varieblaes, etc)
    operators (+ - / * %)
    that can be evaluated to a value

    ex. y=x+5
*/

let students = 20;
//students = students + 1;
//students = students - 1;
//students = students *2;
//students /= 2; //shortcut
students/=3;
let extraStudents = students % 3;

/*
    operator precedence
    1. parenthesis()
    2. exponenets
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);//15
let result2 = (1 + 2) * (3 + 4);//21
console.log(result)