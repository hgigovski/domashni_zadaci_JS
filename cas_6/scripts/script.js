//zadaca 1

let numbers = [3, 5, 6, 8, 11];
let max = -Infinity;
let min = Infinity;

function findLargestNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`Max:${max} Min:${min} Sum:${min + max}`);
}

findLargestNumber(numbers);

//Zadaca 2

let first = ["Hristo", "Filip"];
let last = ["Gigovski", "Trajanovski"];
let fullName = [];

function combineNames(firstNames, lastNames) {
  for (let i = 0; i < firstNames.length; i++) {
    let combinedNames = `${i + 1}.  ${firstNames[i]} ${lastNames[i]}`;
    fullName.push(combinedNames);
  }
  return fullName;
}

combineNames(first, last);
console.log(fullName);

//zadaca 4.

let number = prompt("Insert a number:");

function multiplyDigits(number) {
  let result = 1;
  let digits = String(number).split("");

  for (let i = 0; i < digits.length; i++) {
    let digit = parseInt(digits[i]);
    result *= digit;
  }

  return result;
}
const multiplied = multiplyDigits(number);
console.log("Result:", multiplied);

//zadaca 5

firstArray = [1, 2, 3, 4, 5];

reversedArray = [];

for (let i = 0; i < firstArray.length; i++) {
  reversedArray.push(firstArray[firstArray.length - i - 1]);
}

console.log(reversedArray);
