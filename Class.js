"use strict";
exports.__esModule = true;
exports.Person = void 0;
// Class
var Person = /** @class */ (function () {
    function Person(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.getNameAndAge = function () {
            return "".concat(_this.name, " is ").concat(_this.age, " years old");
        };
        //  this.name = name;
        //  this.age = age;
    }
    //   private name: string;
    //   private age: number;
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
var long = new Person("Long", 20);
// console.log(long.getName());
// console.log(long.name);
console.log(long);
var employees = [];
employees.push(long);
employees.push(new Person("Long", 20));
employees.forEach(function (employee) {
    console.log(employee.getNameAndAge());
});
