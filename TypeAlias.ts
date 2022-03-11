export {};
// Type alias
type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

// const student = (id: StringOrNumber, name: string): void => {
//   console.log(id, name);
// };
// student("test", "John");

// const greet = (user: Student): void => {
//   console.log(user.name);
//   console.log(user.id);
// };
// greet({ id: 1, name: "John" });
// greet({ id: "test", name: "John" });
