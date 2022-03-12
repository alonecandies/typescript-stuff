"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    ;
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.work);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipient, job, amount) {
        this.recipient = recipient;
        this.job = job;
        this.amount = amount;
    }
    Payment.prototype.print = function () {
        return "".concat(this.recipient, " paid ").concat(this.amount, " for ").concat(this.job);
    };
    return Payment;
}());
exports.Payment = Payment;
