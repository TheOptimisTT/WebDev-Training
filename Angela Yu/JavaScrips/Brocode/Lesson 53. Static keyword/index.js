/*
    static =    belongs to the class, not the objects
                properties: useful for caches, fixed-confihuration
                methods: useful for utility functions
*/

class Car{
    
    //numberOfCars = 0; // each car obj has its own var
    static numberOfCars=0;
    constructor(model){
        this.model = model;
        //this.numberOfCars++;//this is how we use it for the obj.
        Car.numberOfCars++; // variable not for the obj but for the class
    }

    static startRace(){
        console.log("3...2...1..GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

//To access the static var
console.log(Car.numberOfCars);
Car.startRace();