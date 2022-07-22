// Perbedaan sama (==) dengan indentik(===)

const aString = '10';
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString === aNumber);

// Logical Operator

let a = 10;
let b = 12;

// And Operator
console.log(a < 15 && b > 10);
console.log(a > 15 && b > 10);

// OR Operator
console.log(a < 15 || b > 10);
console.log(a > 15 || b > 10);


// NOT Operator
console.log(!(a < 15));
console.log(!(a < 15 && b > 10));
