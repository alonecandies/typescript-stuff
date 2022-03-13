"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassImplementInterface_1 = require("./ClassImplementInterface");
const documentOne = new ClassImplementInterface_1.Invoice("Google", "Web Development", 500);
const documentTwo = new ClassImplementInterface_1.Payment("Amazon", "Server Migration", 2000);
const allDocuments = [documentOne, documentTwo];
allDocuments.forEach(doc => console.log(doc));
allDocuments.forEach(doc => console.log(doc.print()));
