"use strict";
// Literal Type and union
//  : "value" => literal type, "value1" | "value2" | "value3" => union type
let hobby = "book";
// hobby = 'cook'; Cannot assign other value to hobby
const count = 1; // Equal to const count:1
const student = {
    id: 1,
    name: 'John',
};
// Equal to:
// const student:{
//    id:number,
//    name:string
// }
// student.name ="Johnz"; //Work
const studentAC = {
    id: 1,
    name: 'John',
}; //as:  type assertion
// type test = {
//    age:number,
// }
