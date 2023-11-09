// Two ways of going through an array
let prices = [5,10,15,20];


// 1.Standard For loop

    // 0 -> end (forward)
for(let i = 0; i < prices.length; i++){
    console.log(prices[i]);
}
    // end -> 0 (backwards)
for(let i = prices.length-1; i >= 0; i--){
    console.log(prices[i]);
}



// 2. For Up statement (foreach)

for(let price of prices){
    console.log(prices[price]);
}
