import { hasPrint } from "./Interface";

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ){};
  print(): string {
      return `${this.client} owes ${this.amount} for ${this.work}`;
  }
}

export class Payment implements hasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amount: number
  ) {}
  print(): string {
    return `${this.recipient} paid ${this.amount} for ${this.job}`;
  }
}