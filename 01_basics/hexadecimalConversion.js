let num = "15";

function xyz(num) {
  toHex(num);
  console.log(hex);
}
xyz();

const toHex = function (num) {
  if (num === 0) {
    return "0";
  }

  let hex = "";
  let binary = 0;
  let negDefault = "ffffffff";

  if (num < 0) {
    num = ~num + 1;
    hex = decToHex(num, hex);
    binary = hexToBinary(hex);
    binary = ~binary + 1;
    hex = binaryToHex(binary);
    if (hex.length < 8) {
      hex = negDefault.slice(0, 8 - hex.length).concat(hex);
    }
  } else {
    hex = decToHex(num, hex);
  }

  return hex;
};

function decToHex(num, hex) {
  let hexArray = ["a", "b", "c", "d", "e", "f"];
  let rem = 0;

  while (num !== 0) {
    rem = num % 16;

    if (rem > 9) {
      hex = hexArray[rem - 10].concat(hex);
    } else {
      hex = String(rem).concat(hex);
    }

    num >>>= 4;
  }
  return hex;
}

function hexToBinary(hex) {
  let binary = "";
  let binaryOfElement = "";
  let hexArray = ["a", "b", "c", "d", "e", "f"];
  let splitHex = hex.split("");

  for (let element of splitHex) {
    if (hexArray.includes(element)) {
      element = hexArray.indexOf(element) + 10;
    } else {
      element = Number(element);
    }

    while (element !== 0) {
      let rem = element % 2;
      binaryOfElement = String(rem).concat(binaryOfElement);
      element = Math.floor(element / 2);
    }
    binary = binary.concat(binaryOfElement);
  }

  return binary;
}

function binaryToHex(binary) {
  let binaryString = String(binary);
  let binarySplit = binaryString.split("");
  let hexArray = ["a", "b", "c", "d", "e", "f"];
  let hex = "";
  let element = 0;
  for (let j = 0; j < binarySplit.length; j += 4) {
    element = 0;
    for (let i = j; i < j + 4; i++) {
      element = element + Number(binarySplit[i]);
    }
    if (element > 9) {
      hex = hex.concat(hexArray[element - 10]);
    } else {
      hex = hex.concat(element.toString());
    }
  }
  return hex;
}
