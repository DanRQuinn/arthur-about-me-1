/**'use strict';

alert('Hi, welcome to my page!');

let nickname = prompt('What is your nickname?'); // Prompt user
alert(`Hello ${nickname}, nice to meet you.`); // template literal that is used for string interpolation

let city = prompt('Where are you from?');
alert(`I've never been there, but it must be a great place to travel to, ${city}.`);

let placeOfBirth = prompt('Was I born in California?');
console.log(placeOfBirth);

if (placeOfBirth === 'y' || placeOfBirth === 'yes') {
  alert('No, I was actually born in the Philippines but raised in America.');
} else if (placeOfBirth === 'n' || placeOfBirth === 'no') {
  alert('You are correct. I was born in the Philippines and I am a first generation immigrant.');
} else {
  alert('Please answer with a "yes" or "no".');
}


let likeHorrorFlick = prompt('Do I like watching horror movies? Yes or No?').toLowerCase();

if (likeHorrorFlick === 'y' || likeHorrorFlick === 'yes') {
  alert('You are right, I love watching horror movies.');
} else if (likeHorrorFlick === 'n' || likeHorrorFlick === 'no') {
  alert('You are wrong. I enjoy horror movies.');
} else {
  alert('You need to answer with \'yes\' or \'no\'.');
}

// High low, guessing 
let placesVisited = 6;

// They have 6 attempts
let guessCount = 6;

// Loop and guess again
while (guessCount > 0) {
  // Get the user's guess
  let guess = prompt('How many places have I visited between 1-7?');

  // Convert to digits
  guess = parseInt(guess);

  // Check if the guess is correct
  if (guess === placesVisited) {
    alert('Correct! You guessed the number of places I have visited.');
    break;
  } else if (guess < placesVisited) {
    guessCount--;
    alert(`Incorrect. The number of places I have visited is higher. You have ${guessCount} guesses left.`);
  } else if (guess > placesVisited) {
    guessCount--;
    alert(`Incorrect. The number of places I have visited is lower. You have ${guessCount} guesses left.`);
  }
}
// Input correct answer
alert(`The correct number of places I have visited is ${placesVisited}. These places are Thailand, Vietnam, Cambodia, Bali, Philippines, and South Korea.`);


// What is my favorite ice cream

let myFavIceCream = 'rocky road'; // starting in the beginning

let attemptsRemaining = 6;

while (attemptsRemaining > 0 && myFavIceCream !== userResponse) {
  attemptsRemaining--;
  console.log(`You have ${attemptsRemaining} attempts remaining.`);

  let userResponse = prompt('What is my favorite ice cream flavor? Rocky Road, Vanilla, Chocolate, Strawberry, or Mint Chocolate, or Banana Split');

  if (myFavIceCream === userResponse) {
    console.log('You are right!');
  }
}
if (attemptsRemaining === 0) {
  console.log(`Sorry, you are out of attempts. My favorite ice cream flavor is ${myFavIceCream}.`);
}


console.log(placeOfBirth);
console.log(likeHorrorFlick);
console.log(myFavIceCream);
console.log(placesVisited);

// 6th question: Guess Game: use array , 4 chances to get right, if not : "Nope, you got it wromg", Too low or Too Hight
// need Loops: if else, 

// 7th question: Name one of my favorite horror flick? , prompt('Yes, that's rignt'); 6 attemps, Display all at the end
// .inludes() or .join() are not allowed!

// example of code
//    while loop
//   let attempRemaining = 4;

//      while () {      // have a condtion that will be false, so it does not do infinite
//    attempRemaining--;
//       console.log('You were close! You have ${attemptsRemaining}');
//

//for loop, create list option[list], have multiple answer, 


//   for (let i = 0; i < attempts; i++) {
//   6 - 0 = 6 -1 = 6 this will get to start at 1 attempt then console.log to next attempt
// console.log('You are getting closer. You have ${attempts - i - 1} attempts remaining ')
// }


