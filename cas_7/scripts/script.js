//Zadaca 1

let fullArr = [6, 5, 4, 4, 5, 6, 4];

function findNumber(num, arr) {
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      emptyArr.push(num);
    }
    if (arr.lenght == 0) {
      console.log(`There is no number:${num} in that Array`);
    }
  }
  console.log(`There is ${emptyArr.length} times number:${num} in that Array`);
}

findNumber(0, fullArr);

//Zadaca 2

function sum(num) {
  if (num === 0) {
    return 1;
  }
  return num * sum(num - 1);
}

// sum(5) = 5 * sum(4)    = 5 * 24 = 120
// sum(4) = 4 * sum(3)    = 4  * 6 = 24
// sum(3) = 3 * sum(2)    = 3 * 2 = 6
// sum(2) = 2 * sum(1)    = 2 * 1 = 2
// sum(1) = 1* sum(0)=1   =  1 * 1 = 1

console.log(sum(5));

//Zadaca 3

let firstNames = ["Hristo", "Antonio", "Filip", "Stefan", "Monika"];
let lastNames = [
  "Gigovski",
  "Stefanovski",
  "Trajanovski",
  "Vasilev",
  "Stojanovska",
];

let first = ["Hristo", "Filip"];
let last = ["Gigovski", "Trajanovski"];
let fullName = [];

function combineNames(firstNames, lastNames) {
  for (let i = 0; i < firstNames.length; i++) {
    let combinedNames = `${firstNames[i]} ${lastNames[i]}`;
    fullName.push(combinedNames);
  }
  fullName.forEach((x) => {
    console.log(x);
  });
}

combineNames(firstNames, lastNames);
console.log(fullName);
