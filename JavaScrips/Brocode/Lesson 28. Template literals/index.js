/*
    template literals = delimited with (`)
                    insted of doule or single quotes
                    allows embedded variables and expressions
*/

let userName = "Bro";
let items = 3;
let total = 75;

/* previuos way of writing 
console.log("Hello",userName);
console.log("You have ",items, " items in your cart.");
console.log("Your total is $",total);
*/

//Using template literals
console.log(`Hello ${userName}!`);
console.log(`You have ${items} items in your cart.`);
console.log(`Your total is $${total}`);

//Updating a Label 
let text = 
`Hello ${userName}!<br>
You have ${items} items in your cart.<br>
Your total is $${total}<br>`;
//console.log(text);
document.getElementById("myLabel").innerHTML = text;