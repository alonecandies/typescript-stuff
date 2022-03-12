// Interface
interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const long: Person = {
  name: "Long",
  age: 20,
  speak: (language: string): void => {
    console.log(`${language}`);
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(long);
console.log(long.speak("English"));

const hello = (person: Person): void => {
   console.log(`Hello ${person.name}`);
}

hello(long)

let people: Person[] = [];

export interface hasPrint {
  print():string
}