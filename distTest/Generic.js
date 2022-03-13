"use strict";
const last = (arr) => arr[arr.length - 1];
const l1 = last([1, 2, 3, 4, 5]);
// const l2 = last(['a', 'b', 'c', 'd', 'e']); Will work with Array<any>
// console.log(l1);
const lastT = (arr) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3, 4, 5]);
const l4 = lastT(["a", "b", "c", "d", "e"]);
const l5 = lastT(["a", "b", "c", "d", "e"]);
const makeArrT = (x, y) => [x, y];
console.log(makeArrT(1, "a"));
const makeArrXY = (x, y) => [x, y];
const makeTuple = (x, y) => [x, y];
makeTuple(1, "a");
makeTuple(1, "a");
makeTuple(1, "a");
const makeTupleWithDefault = (x, y) => [x, y];
makeTupleWithDefault(null, 3);
