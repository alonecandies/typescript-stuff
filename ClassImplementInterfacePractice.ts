import { Invoice, Payment } from './ClassImplementInterface';
import { hasPrint } from './Interface';
const documentOne: hasPrint = new Invoice("Google", "Web Development", 500);
const documentTwo: hasPrint = new Payment("Amazon", "Server Migration", 2000);
const allDocuments: hasPrint[] = [documentOne, documentTwo];
allDocuments.forEach(doc => console.log(doc));
allDocuments.forEach(doc => console.log(doc.print()));