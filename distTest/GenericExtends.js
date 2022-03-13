"use strict";
// Generic extends
// ============================================================================
// const makeFullName = obj => ({
//    ...obj,
//    fullName: `${obj.firstName} ${obj.lastName}`,
// })
const makeFullNameConstraint = (obj) => (Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` }));
const makeFullNameWithGenerics = (obj) => (Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` }));
const addNewEmployee = (employee) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, employee), { uid });
};
const empOne = addNewEmployee({
    firstName: "John",
    lastName: "Doe",
});
console.log(empOne);
// console.log(empOne.name);
const addNewEmployeeT = (employee) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, employee), { uid });
};
const empTwo = addNewEmployeeT({
    firstName: "John",
    lastName: "Doe",
});
console.log(empTwo);
console.log(empTwo.firstName);
const addNewEmployeeTWithConstrain = (employee) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, employee), { uid });
};
const empThree = addNewEmployeeTWithConstrain({
    name: "John",
    age: 30
});
