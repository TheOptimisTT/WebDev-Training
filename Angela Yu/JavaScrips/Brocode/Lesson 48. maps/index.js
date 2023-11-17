/*
    Map = object that holds key-value pairs of any data type
*/

const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underwear",50]
]);
//getting the value out
let shoppingCart = 0;
shoppingCart+= store.get("t-shirt");
shoppingCart+= store.get("underwear");
console.log(shoppingCart);

//adding a pair
store.set("hat",40);

//deleting a pair
store.delete("hat");

//check if a Key is in the Map
console.log(store.has("hat")); //returns a boolean t/f

//size of Map -> return the amount of key:value pairs
console.log(store.size);

//listing all the key:value pairs
store.forEach((value,key)=> console.log(`${key} $${value}`));