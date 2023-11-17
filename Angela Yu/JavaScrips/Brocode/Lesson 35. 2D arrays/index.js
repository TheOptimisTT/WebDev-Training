// 2D arrays = An array of arrays

let fruits =        ["apples","oranges","bananas"];
let vegetables =    ["carrots","onions","potatoes"];
let meats =         ["eggs","chicken","fish"];

let groceryList = [fruits,vegetables,meats];

//printing the 2D array
for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

//changing the values
groceryList[0][0] = "mangoes";//apples -> mangoes
groceryList[0][2] = "kiwi";//bannanas -> kiwi

groceryList[2][0] = "steak";//eggs -> steak
groceryList[2][2] = "beaf";//fish -> beaf