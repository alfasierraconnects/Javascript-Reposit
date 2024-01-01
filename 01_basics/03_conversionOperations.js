let someNumber = 33;
let stringNumber = String(someNumber);

// console.log(typeof someNumber);
// console.log(typeof stringNumber);

//----------------------------------------------------------------------------------------------------------------------------------//

let temp = "33ab";
let tempTest = Number(temp);

/*

33ab - NaN -- number
null - 0 --number
undefined - NaN --number
true - 1, false - 0

*/

console.log(typeof tempTest);
console.log(tempTest);

/*                               ///////////////////OPERATIONS///////////////////////                                   */

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
