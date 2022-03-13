"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let printStudent;
printStudent = (student) => {
    console.log(student.name, student.age);
};
const long = {
    name: "long",
    age: 30,
};
printStudent(long);
