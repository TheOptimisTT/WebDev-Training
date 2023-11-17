/*
    console.time() =    Start a timer you can use to
                        track how long an operation takes
                        Give each timer a unique name.
*/



console.time("Response time");//start

alert("Click the OK button");
//works only on synchronous objs

console.timeEnd("Response time");//end