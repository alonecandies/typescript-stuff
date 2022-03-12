// Class
export class Person {
  constructor(private name: string, private age: number) {
    //  this.name = name;
    //  this.age = age;
  }
  //   private name: string;
  //   private age: number;
  public getName(): string {
    return this.name;
  }
  protected getAge(): number {
    return this.age;
  }
  readonly getNameAndAge = (): string => {
    return `${this.name} is ${this.age} years old`;
  };
}

const long = new Person("Long", 20);
// console.log(long.getName());
// console.log(long.name);
console.log(long);

let employees: Person[] = [];
employees.push(long);
employees.push(new Person("Long", 20));
employees.forEach((employee) => {
  console.log(employee.getNameAndAge());
});
