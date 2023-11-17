/*
    this =  reference to a particular object
            the object depends on the immediate context
            
            If Used outside an Object it reffers to the Window object
*/

const car1 = {
    //properties
    model: "Mustang",
    color: "red",
    year: "2023",

    //methods
    drive : function(){
        console.log(`You drive the ${this.model}`); //same as car1.model
    },
    brake : function(){
        console.log("You step on the break");
    }
}
const car2 = {
    //properties
    model: "Corvette",
    color: "blue",
    year: "2024",

    //methods
    drive : function(){
        console.log(`You drive the ${this.model}`);//same as car2.model
    },
    brake : function(){
        console.log("You step on the break");
    }
}