/*  
    ternary operator = Shortcut for an 'if/else statement'
                    Takes 3 operands
                    
                    1. a condition with ?
                    2. expression if True :
                    3. expression if False
            condition ? exprIfTrue : exprIfFalse;
*/

let adult = checkAge(21);
let win = true;
checkWinner(win);
function checkAge(age){
    /*if(age>=18){
        return true;
    }else{
        return false;
    }*/
    return (age>=18) ? true : false; // same as above!
}

function checkWinner(win){
    win ? console.log("You win!") : console.log("You lose");
}