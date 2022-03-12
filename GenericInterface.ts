// Generics in Interface
// ============================================================================
interface Resource<T> {
   id: number;
   name: string;
   data: T
}

const resourceOne : Resource<string> = {//Must pass <string>
   id: 1,
   name: "Resource One",
   data: "Some data" //Must be string
}

const resourceTwo : Resource<object> = {
   id: 2,
   name: "Resource Two",
   data: {
      name: "John Doe",
      age: 30
   }
}

const resourceThree : Resource<string[]> = {
   id: 3,
   name: "Resource Three",
   data: ["Some", "Data", "Array"]
}

type NumberResource = Resource<number[]>;

const numbersResource : NumberResource = {
   id: 4,
   name: "Resource Four",
   data: [1, 2, 3, 4, 5]
}