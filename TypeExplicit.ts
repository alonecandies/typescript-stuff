export {};
// Explicit type
let userName: string = "John";
let age: number = 30;
let isLoggedIn: boolean = true;
let array: number[] = [1, 2, 3];
let obj: { name: string; age: number } = {
  name: "John",
  age: 30,
};
let mixed: (string | number | boolean)[] = [1, "test", false];
let id: string | number = "test";
let hobby: "book" | "music" | "movie" | "game" = "book";
// hobby = 'cook'; Cannot assign other value to hobby
