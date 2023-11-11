/*
    constructor =   a special method of a class,
                    accepts arguments and assigns properties
*/

class Student{

    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studyig`);
    }
}

const st1 = new Student("John",30,3.2);
const st2 = new Student("Alex",35,1.2);
st1.study();
console.log(st1.name);
console.log(st1.age);
console.log(st1.gpa);

st2.study();
console.log(st2.name);
console.log(st2.age);
console.log(st2.gpa);