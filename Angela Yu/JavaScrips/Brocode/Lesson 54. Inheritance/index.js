/*
    inheritance =   a child class can inherit all the
                    methods and properties form another class

        child class => class NAME extends PARENT{}
                
*/

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    
    name = "Rabbit";
   
    run(){
        console.log(`This ${this.name} is runing`);
    }
}

class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);

rabbit.eat();
fish.eat();
hawk.eat();

rabbit.run();
fish.swim();
hawk.fly();