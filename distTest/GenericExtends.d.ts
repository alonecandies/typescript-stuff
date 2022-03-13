declare const makeFullNameConstraint: (obj: {
    firstName: string;
    lastName: string;
}) => {
    fullName: string;
    firstName: string;
    lastName: string;
};
declare const makeFullNameWithGenerics: <T extends {
    firstName: string;
    lastName: string;
}>(obj: T) => T & {
    fullName: string;
};
declare const addNewEmployee: (employee: object) => {
    uid: number;
};
declare const empOne: {
    uid: number;
};
declare const addNewEmployeeT: <T extends object>(employee: T) => T & {
    uid: number;
};
declare const empTwo: {
    firstName: string;
    lastName: string;
} & {
    uid: number;
};
declare const addNewEmployeeTWithConstrain: <T extends {
    name: string;
}>(employee: T) => T & {
    uid: number;
};
declare const empThree: {
    name: string;
    age: number;
} & {
    uid: number;
};
