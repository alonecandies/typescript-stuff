export {};
// Function signature

// let greet:Function
// greet = () => {console.log("Hello")};
// greet()

// let greet:(name:string) => void; //This is func signature
// greet = (test:string) => {console.log(`Hello ${test}`)};
// greet("long")

// let calc: (a: number, b: number, c: string) => number;
// calc = (num1: number, num2: number, action: string) => {
//   action === "add" ? console.log(num1 + num2) : console.log(num1 - num2);
//   return action === "add" ? num1 + num2 : num1 - num2;
// };
// calc(1,2,"add");
// calc(1,2,"sub");

type student = { name: string; age: number };
let printStudent: (student: student) => void;
printStudent = (student: student) => {
  console.log(student.name, student.age);
};
const long = {
  name: "long",
  age: 30,
};
printStudent(long);
