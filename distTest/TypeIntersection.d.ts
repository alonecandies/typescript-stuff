interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
declare type Employee = Identity & Contact;
declare let employee: Employee;
