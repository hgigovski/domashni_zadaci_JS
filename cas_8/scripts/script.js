//ZADACA 1

function Product(name, category, hasDiscount, price) {
  this.nameOfProduct = name;
  this.categoryOfProduct = category;
  this.discountOfProduct = hasDiscount;
  this.priceOfProduct = price;
}

let arrProducts = [
  new Product("Yogurt", "Food", 20, 2),
  new Product("Television", "Electronics", 10, 430),
  new Product("Ice Cream", "Food", 5, 1),
  new Product("Doll", "Toys", 50, 15),
  new Product("Air Conditioner", "Electronics", 12, 550),
  new Product("Football", "Toys", 10, 10),
  new Product("Cheese", "Food", 30, 3),
  new Product("Milk", "Food", 50, 1),
  new Product("Swimming pool", "Entertainment", 40, 160),
  new Product("Computer", "Electronics", 20, 1000),
  new Product("Water", "Food", 0, 1),
  new Product("Shampoo", "Cosmetics", 30, 4),
  new Product("Popcorn", "Food", 5, 3),
  new Product("Olive oil", "Food", 0, 5),
  new Product("Soup", "Food", 15, 2),
];

//1
let expensiveProducts = arrProducts.filter((x) => x.priceOfProduct > 20);
console.log("1. The products below cost more then 20$:");
expensiveProducts.forEach((x) => console.log(x.nameOfProduct));

console.log("");

//2

let food = arrProducts.filter(
  (x) => x.categoryOfProduct == "Food" && x.discountOfProduct > 0
);
console.log("2.The products bellow are in category Food :");
food.forEach((x) => console.log(x.nameOfProduct));

console.log("");

//3
let discountProducts = arrProducts.filter((x) => x.discountOfProduct > 0);

let sumDiscountProducts = discountProducts.reduce((acc, x) => {
  return acc + x.priceOfProduct;
}, 0);

let avgDiscountProducts = sumDiscountProducts / discountProducts.length;

console.log(
  `3.The average price of all products with discount is: ${parseInt(
    avgDiscountProducts
  )}$`
);

//4
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function startsWithVowel(word) {
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === word[0]) return true;
  }
  return false;
}

let nameOfDiscountProducts = arrProducts.filter((x) => {
  return x.discountOfProduct === 0 && startsWithVowel(x.nameOfProduct);
});
console.log(
  `The product that starts with vowels and its not on discount is : `
);
console.log(nameOfDiscountProducts);

//5
arrProducts.sort((x1, x2) => x1.priceOfProduct - x2.priceOfProduct);
console.log(arrProducts);

//Zadaca 2

let changeTitle = document.getElementsByTagName("h1")[0];
changeTitle.innerText = "Profesor";

let changeParagraph = document.getElementsByClassName("paragraph");
changeParagraph[0].innerText = "Profesor na JS akademija";

let changeParagraphTwo = document.querySelector(".second");
changeParagraphTwo.innerText = "Profesor vo semos";

let changeParagraphThree = document.querySelector("text");
changeParagraphThree.innerText = "SMENET TEXT";

let changeParagraphFour = document.getElementsByTagName("h1")[1];
changeParagraphFour.innerText = "PROMENAAA123232";

let changeParagraphFive = document.querySelector("h3");
changeParagraphFive.innerText = "PROMENAAA";
