// Generic extends
// ============================================================================
// const makeFullName = obj => ({
//    ...obj,
//    fullName: `${obj.firstName} ${obj.lastName}`,
// })

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameWithGenerics = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empOne = addNewEmployee({
  firstName: "John",
  lastName: "Doe",
});

console.log(empOne);
// console.log(empOne.name);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empTwo = addNewEmployeeT({
  firstName: "John",
  lastName: "Doe",
});

console.log(empTwo);
console.log(empTwo.firstName);

const addNewEmployeeTWithConstrain = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empThree = addNewEmployeeTWithConstrain({
  name: "John",// Must have
  age: 30
});
