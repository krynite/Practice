let  val = 1;

if (val === 1) {
  console.log('This code runs because val is 1');
}

val = 2;

if (val === 1) {
  console.log('val is one');
} else {
  console.log('val is not one');
}

val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

for (let i = 1; i < 10; i++) {
  console.log(i);
}


const dayOfTheWeek = 'Friday';
const isAfternoon = true;

if (dayOfTheWeek === 'Friday') {
  if (isAfternoon) {
    console.log('Almost the weekend!');
  } else {
    console.log('Happy Friday morning!');
  }
} else {
  console.log("It's not Friday.");
}


const num = 100;

if (num > 5) {
  console.log('num is larger than 5');
} else {
  console.log('num is 5 or less');
}

num > 5 ? console.log('num is larger than 5') : console.log('num is 5 or less'); //! Same as Link 48 Method above


let message;

if (num > 5) {
  message = 'num is larger than 5';
} else {
  message = 'num is 5 or less';
}
console.log(message)

 message = num > 5 ? 'num is larger than 5' : 'num is 5 or less';            //! Same as "IF" 59 Method above
console.log(message);



//----------------------------- SWITCH CASE -----------------------------\\

const seasonCheck = 'winter';

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

//----------------------------- SWITCH CASE (Fall Through case) -----------------------------\\

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

//----------------------------- WHILE -----------------------------\\

let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}


//----------------------------- DO WHILE -----------------------------\\

num = 120;

do {
  console.log(`${num} is even`);
  num += 2;
} while (num <= 10);




















//? These two data types are always falsy:
//! null: Represents the intentional absence of any object value.
//! undefined: Indicates that a variable has not been assigned a value.


//? These four values are also falsy:
//! false: The boolean value of false.
//! 0 (zero): The number zero.
//! NaN (Not a Number): Indicates a value that is not a valid number.
//! '' (An empty string): Strings are falsy when they are empty. Note, a string with a value of a space (' ') is not empty and therefore is truthy.


// Normal Comments
//* Highlighted Comments
//! Warning
//? ASDFASDFASDF
//TODO ASDFADSFASDF
//@param sdfgsfdgs