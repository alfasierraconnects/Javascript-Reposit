console.log("Ashutosh");

let n = 5;

if (n <= 0) {
  console.log("Enter a positive No.");
} else if (n === 1) {
  console.log(2);
} else {
  let printedNum = 1;
  let j = 3;
  console.log(2);
  while (printedNum < n) {
    if (isPrime(j) === true) {
      console.log(j);
      printedNum++;
    }
    j++;
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
