export {};
// Optional & Non-null

// Declare with ? to apply optional
// const add = (a: number, b?: number): number => {
//   return b? a + b : a;
// };
// console.log(add(3));

// Declare with ! to apply non-null
const addNonNull = (a: number, b?: number): number => {
   return a + b!;
}
console.log(addNonNull(3, 4));
console.log(addNonNull(3));