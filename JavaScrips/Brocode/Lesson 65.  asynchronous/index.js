/*
    synhronous code =   In an ordered sequence.
                        Step-by-Step linear instructions
                        (start now, finish now)


    asynchronous code=  Out of sequence.
                        ex. Access a database
                            fetch a file
                            tasks that take time
                        (start now, finish sometime later)
*/


console.log("Start");
console.log("This step is synchronous"); // has to wait for the first line to finish
setTimeout(()=>console.log("This step is Asynchronous"),5000);
// will  finish at somepoint. running in the background
console.log("End");

