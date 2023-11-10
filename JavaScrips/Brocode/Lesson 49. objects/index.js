/*
    object = A group if properties and methods

        properties = What an object has.
        methods = What an object can do.

    use . to access properties/methods
*/


//object CAR
const car = {
    //properties
    model: "Mustang",
    color: "red",
    year: "2023",

    //methods
    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the break");
    }
}

console.log(car.model);
console.log(car.year);
console.log(car.color);
car.drive();
car.brake();



