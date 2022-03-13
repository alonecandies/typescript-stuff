// Enum
// ========================================================
// Number enum
export {}
enum Status {
  Active,
  Inactive,
  Deleted,
}

enum Test {
  A = 3,
  B = 4,
  C = 8,
}

let test: Status = Status.Active;
test = 9; //valid
console.log(test)
console.log(Status[0])
console.log(Status['Active'])
// String enum
enum Color {
   Red = '#FF0000',
   Green = '#00FF00',
   Blue = '#0000FF',
}

enum MediaTypes {
   JSON = 'application/json',
   XML = 'application/xml',
   CSV = 'text/csv',
}