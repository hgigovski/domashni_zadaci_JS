// 1. Create a function called tellStory()

// The function should 3 strings as arguments: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

function tellStory(name, mood, activity) {
  return `This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day. The end.`;
}

let personExplanation = tellStory("Hristo", "feeling good", "hiking");

console.log(personExplanation);

// 2. Write a function that takes two numbers: the numbers of girls and boys in a team.
//  Print these numbers in console, but add girls and boys correspondingly after them. Example, if the input is 4, 7, the function should print 4 girls 7 boys.
// Bonus:
// For numbers less than 10, add 0 before them. For the bove example that would be 04 girls 07 boys.

function studentsGender(male, female) {
  if (male < 10) {
    male = "0" + male;
  }
  if (female < 10) {
    female = "0" + female;
  }
  return `${female} girls | ${male} boys`;
}

let teamGender = studentsGender(12, 3);

console.log(teamGender);

// //3. Write a JavaScript function that will:

// calculate and return your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Print the following message: Your dog's age is NN years. NN is the calculated age;
// Note: Call the function and pass human years as input.
// Bonus: Make function for converting dog to human years as well

function dogAgeToHumanAge(dogAge) {
  humanAge = dogAge * 7;
  return `Your dog's age is ${dogAge} years.${humanAge} is calculated age.`;
}

let humanYears = dogAgeToHumanAge(12);
console.log(humanYears);

function humanAgeToDogAge(humanAge) {
  dogAge = humanAge / 7;
  return `Your human's age is ${humanAge} years.${parseInt(
    dogAge
  )} is calculated age.`;
}

let dogYears = humanAgeToDogAge(60);
console.log(dogYears);

// 4. CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// -name
// -kind
// -speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog Bonnie says: ‘Hey bro!!!’”

let animal = {
  name: "Milcho",
  kind: "Dog",
  speak() {
    return `'Hey bro!!!'`;
  },
};

console.log(`"${animal.kind} ${animal.name} says:${animal.speak()}"`);

// 5.Write a JavaScript program to display the reading status of some book. The object should have the next properties:
// title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (when readingStatus is true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (when readingStatus is false).

let book = {
  title: "The Robots of dawn",
  author: "Isaac Asimov",
  readingStatus: false,
  getInfo() {
    if (book.readingStatus == true) {
      return `Already read "${this.title}" by  ${this.author}.`;
    } else {
      return `You still need to read ${this.title} by ${this.author}.`;
    }
  },
};

console.log(book.getInfo());

book.readingStatus = true;

console.log(book.getInfo());
