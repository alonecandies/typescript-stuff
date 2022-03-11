export {};
// Any type
let age: any = 30;
age = "30";
age = [1, 3];

let mixed: any[] = [1, "test", false];
// mixed = "test"; Cannot assign value to array any

let person: { name: any; age: any } = {
  name: "John",
  age: 30,
};
