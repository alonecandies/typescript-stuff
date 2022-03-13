export declare class Person {
    private name;
    private age;
    constructor(name: string, age: number);
    getName(): string;
    protected getAge(): number;
    readonly getNameAndAge: () => string;
}
