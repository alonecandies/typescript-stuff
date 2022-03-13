"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getNameAndAge = () => {
            return `${this.name} is ${this.age} years old`;
        };
        //  this.name = name;
        //  this.age = age;
    }
    //   private name: string;
    //   private age: number;
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
const long = new Person("Long", 20);
// console.log(long.getName());
// console.log(long.name);
console.log(long);
let employees = [];
employees.push(long);
employees.push(new Person("Long", 20));
employees.forEach((employee) => {
    console.log(employee.getNameAndAge());
});
