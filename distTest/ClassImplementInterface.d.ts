import { hasPrint } from "./Interface";
export declare class Invoice implements hasPrint {
    readonly client: string;
    private work;
    amount: number;
    constructor(client: string, work: string, amount: number);
    print(): string;
}
export declare class Payment implements hasPrint {
    readonly recipient: string;
    private job;
    amount: number;
    constructor(recipient: string, job: string, amount: number);
    print(): string;
}
