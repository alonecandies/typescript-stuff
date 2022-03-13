interface Resource<T> {
    id: number;
    name: string;
    data: T;
}
declare const resourceOne: Resource<string>;
declare const resourceTwo: Resource<object>;
declare const resourceThree: Resource<string[]>;
declare type NumberResource = Resource<number[]>;
declare const numbersResource: NumberResource;
