"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Invoice = void 0;
class Invoice {
    constructor(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    ;
    print() {
        return `${this.client} owes ${this.amount} for ${this.work}`;
    }
}
exports.Invoice = Invoice;
class Payment {
    constructor(recipient, job, amount) {
        this.recipient = recipient;
        this.job = job;
        this.amount = amount;
    }
    print() {
        return `${this.recipient} paid ${this.amount} for ${this.job}`;
    }
}
exports.Payment = Payment;
