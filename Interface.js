"use strict";
exports.__esModule = true;
var long = {
    name: "Long",
    age: 20,
    speak: function (language) {
        console.log("".concat(language));
    },
    spend: function (amt) {
        return amt;
    }
};
console.log(long);
console.log(long.speak("English"));
var hello = function (person) {
    console.log("Hello ".concat(person.name));
};
hello(long);
var people = [];
