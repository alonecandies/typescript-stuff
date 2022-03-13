"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Deleted"] = 2] = "Deleted";
})(Status || (Status = {}));
var Test;
(function (Test) {
    Test[Test["A"] = 3] = "A";
    Test[Test["B"] = 4] = "B";
    Test[Test["C"] = 8] = "C";
})(Test || (Test = {}));
let test = Status.Active;
test = 9; //valid
console.log(test);
console.log(Status[0]);
console.log(Status['Active']);
// String enum
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
    MediaTypes["CSV"] = "text/csv";
})(MediaTypes || (MediaTypes = {}));
