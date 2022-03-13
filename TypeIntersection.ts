// Intersection type: &
interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let employee: Employee = {
  id: 1,
  name: "John",
  email: "",
  phone: "",
} as Employee;
