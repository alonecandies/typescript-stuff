// Generics
// ============================================================================
// Generic: <string>
type strArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];
const l1 = last([1, 2, 3, 4, 5]);
// const l2 = last(['a', 'b', 'c', 'd', 'e']); Will work with Array<any>
// console.log(l1);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3, 4, 5]);
const l4 = lastT(["a", "b", "c", "d", "e"]);
const l5 = lastT<string>(["a", "b", "c", "d", "e"]);

const makeArrT = <T>(x: T, y: string): Array<T | string> => [x, y];
console.log(makeArrT(1, "a"));

const makeArrXY = <X, Y>(x: X, y: Y): Array<X | Y> => [x, y];

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
makeTuple(1, "a");
makeTuple<number, string>(1, "a");
makeTuple<string | number, string>(1, "a");

const makeTupleWithDefault = <X,Y=number>(x: X, y: Y): [X, Y] => [x, y];
makeTupleWithDefault<string|null>(null, 3);