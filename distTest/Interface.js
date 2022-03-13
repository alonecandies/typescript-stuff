"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const long = {
    name: "Long",
    age: 20,
    speak: (language) => {
        console.log(`${language}`);
    },
    spend(amt) {
        return amt;
    },
};
console.log(long);
console.log(long.speak("English"));
const hello = (person) => {
    console.log(`Hello ${person.name}`);
};
hello(long);
let people = [];
