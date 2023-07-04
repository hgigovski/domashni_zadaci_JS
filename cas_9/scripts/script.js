//Zadaca 1 :
//Note: Gi zapisav vo DOM i gi isprintav vo consola bidejki ne sfativ sto kade tocno da  isprintam i sto da napravam, se nadevam e tocno resenieto :)

let numbers = [2, 3, 5, 4, 5, 6];

function printedNumbers(arr, title) {
  let createdTitle = document.createElement("h3");
  let createdList = document.createElement("ul");
  createdTitle.innerText = title;
  for (let i = 0; i < arr.length; i++) {
    let createdListItem = document.createElement("li");
    createdListItem.innerText = arr[i];
    createdList.appendChild(createdListItem);
  }
  document.body.appendChild(createdTitle);
  document.body.appendChild(createdList);
  console.log(createdList);
}

printedNumbers(numbers, "Zadaca-1");

let sumNumbers = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

let createdSumNumbers = document.createElement("p");
document.body.appendChild(createdSumNumbers);
createdSumNumbers.innerText = `The sum of the elements from the array is: ${sumNumbers}`;
console.log(`The sum of the elements from the array is: ${sumNumbers}`);

let createdParagraph = document.createElement("p");
document.body.appendChild(createdParagraph);
createdParagraph.innerText = `${numbers.join("+")} = ${sumNumbers}`;
console.log(`${numbers.join("+")} = ${sumNumbers}`);

//Zadaca 2 :

function weightInChickens(weight) {
  weight = parseFloat(
    prompt(
      "Insert how much kg's of steak you got and we will make for you in chickens:"
    )
  );
  let weightInChickens = weight / 0.5;
  let x = `${weightInChickens} chickens`;
  console.log(x);
  let createdResult = document.createElement("p");
  let createdTitle1 = document.createElement("h3");
  document.body.appendChild(createdTitle1);
  document.body.appendChild(createdResult);
  createdResult.innerText = `In ${weight}kg there are ${x}`;
  createdTitle1.innerText = `Zadaca-2`;
  if (weight < 0) {
    createdResult.innerText = "You have entered invalid numbers of kg's";
  }
}

weightInChickens();

//Zadaca 3 :

let nameOfRecipe = prompt("Write the name of the recipe:");
let numberOfIngrediants = parseInt(
  prompt("Write the number of ingrediants that are in the recipe:")
);
let ingrediantsArr = [];

for (i = 0; i < numberOfIngrediants; i++) {
  let ingrediant = prompt(`Write the name of the ingrediant number ${i + 1}:`);
  ingrediantsArr.push(ingrediant);
}
let createdTitle2 = document.createElement("h3");
let createdNameOfRecipe = document.createElement("h5");
let createdListofIngrediants = document.createElement("ul");
document.body.appendChild(createdTitle2);
document.body.appendChild(createdNameOfRecipe);
document.body.appendChild(createdListofIngrediants);
createdTitle2.innerText = "Zadaca-3";
createdNameOfRecipe.innerText = nameOfRecipe;

for (let i = 0; i < ingrediantsArr.length; i++) {
  createdItemIngrediant = document.createElement("li");
  createdListofIngrediants.appendChild(createdItemIngrediant);
  createdItemIngrediant.innerText = ingrediantsArr[i];
}

// //Zadaca 4 :
let createdTitle3 = document.createElement("h3");
createdTitle3.innerText = "Zadaca-4 Reshenie:";
document.body.appendChild(createdTitle3);

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateTitle();
});

function generateTitle() {
  let color = document.getElementById("color").value;
  let fontSize = document.getElementById("textSize").value;
  let text = document.getElementById("text").value;

  let createdCaption = document.createElement("h1");
  createdCaption.innerHTML = text;
  createdCaption.style.color = color;
  createdCaption.style.fontSize = fontSize + "px";

  document.body.appendChild(createdCaption);
}

//Zadaca 5 :

todoButton.addEventListener("click", (event) => {
  fetchRandomTodo();
});

function fetchRandomTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      let users = json;
      let toDo = users[Math.floor(Math.random() * users.length + 1)];
      console.log(toDo.id);
      console.log(toDo.title);
      toDo.completed ? console.log("Completed") : console.log("Not completed");
    })
    .catch((error) => console.log(error.message))
    .finally(() => console.log(":)" + new Date().toString()));
}
