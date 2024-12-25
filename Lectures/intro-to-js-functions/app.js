function printBanner() {
  console.log('=======================');
  console.log('Insert Banner Text Here');
  console.log('=======================');
}
printBanner();


function sayHello(){
  console.log('Hello!');
}
sayHello();

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello('Abby');

function add(numA, numB) {
  return numA + numB;
}
add(1, 5);

function planetHasWater(planet) {
    if(planet === 'Earth'){
        console.log(true);
    } else if ( planet === 'Mars'){
         console.log(true);
    } else if ( planet === 'Venus'){
         console.log(false);
    } else if ( planet === 'Jupiter'){
         console.log(false);
    }
}

planetHasWater('Earth');   // should print true
planetHasWater('Venus');   // should print false
planetHasWater('Mars');    // should print true
planetHasWater('Jupiter'); // should print false


function computeArea(width,height) {
    return console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square unites.`); 
};
computeArea(5, 25);

//----------------------------- Different ways of Writing Functions -----------------------------\\

//? Normal Way
function add1(numA, numB){
  return console.log(numA + numB);
}

//? Slightly shorter way
const add2 = function(numA, numB) {
  return console.log(numA + numB);
}

//! TRY TO USE THIS METHOD!!
const add3 = (numA,numB) => {
    return console.log(numA + numB);
}


add1(4,3);
add2(4,3);
add3(4,3);

const sumTwoNumbers = (numA, numB) => {
  return numA + numB;
}

const sum = sumTwoNumbers(5, 10);

console.log(sum);


//----------------------------- Functions with Single Parameters -----------------------------\\

const multiply = (numA, numB) => numA * numB;   //! Notice no curly brackets after arrow.

console.log(multiply(3, 4));            // Prints: 12


const addTwo = num => {                 //! Notice no () brackets around num.
  console.log(num + 2);
}
// addOne(2); 


const double = num => num * 2;      //! Combining the above two examples.
                                    //! No curly bracket after arrow, no () around num parameter.
                                    //! NOTE: No parameter still requires "()" to indicate no parameter.


//----------------------------- Default Value in Parameters -----------------------------\\
const sayHi = (name = 'friend') => {
  console.log(`Hi ${name}!`);
}
sayHi();        // Prints: 'Hi friend!'
sayHi('Joe');   // Prints: 'Hi Joe!'


//----------------------------- Function Hoisting -----------------------------\\


declarationAdd(5, 10); // This works!

// expressionAdd(5, 10);   // This breaks!

// testAdd();              // This breaks!


function declarationAdd(a, b) {         //! Normal Function works with hoisting. (This means function is declared at the start of the js.)
  return a + b;
}

const expressionAdd = function(a, b) {  //! Simplified and arrow functions does not hoist. (This means that calling of function can only happen after its beed declared.)
  return a + b;
}

const testAdd = (a,b) => {              //! Simplified and arrow functions does not hoist. (This means that calling of function can only happen after its beed declared.)
    return a+b;
}

//----------------------------- Multi Arguments and Parameters -----------------------------\\

//! Arguments = Inputs coming from outside.
//! Parameters = Placeholder for Arguments within the function. 

 add = (numA, numB, numC) => {     //! Parameters = numA, numB, numC
  return numA + numB + numC;
}

console.log(add(5, 2));                 //! Arguments = 5,2
// Prints: NaN



//----------------------------- Paramenters with "(...para)" -----------------------------\\



function calculateAverage(...scores){           // Each argument is condensed into a single array called scores
  let total = 0;

  for(let i = 0; i < scores.length; i++) {      // Loop over the scores array to tally up the total
    total = total + scores[i]
  }
  
  return total / scores.length;                 // Divide the total by the length of the array to find the average
}

calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);    // returns 5.5

//----------------------------- Wrapping Code using Functions -----------------------------\\
//----------------------------- Prevents Code leak to Global codes -----------------------------\\

(() => {
  'use strict';

  // your code here
	
})()


