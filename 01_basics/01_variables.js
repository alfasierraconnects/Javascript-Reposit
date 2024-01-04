const accountId = 144553;
let accountEmail = "alfasierra@gmail.com";
var accountPassword = "12345";
accountCity = "Chennai";
let accountState;

/* 

1. never use var due to block scope and function scope issue
2. always declare a variable ----> good practice

*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
