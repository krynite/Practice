console.log("Comments are great")
let name = 'Tony Stark';
// console.log(name)
name = 'Pepper Potts';
// console.log(name)

let myString = "Hello World";
let myOtherString = "Hello World again";

// console.log(typeof myString)        //String
// console.log(typeof myOtherString)   //String

let myNum = 15
console.log(myNum)
// console.log(typeof myNum)   //Number
// console.log(typeof 12.34)   //Number 


let newNull = null;
// console.log(newNull)
// console.log(typeof newNull)


let userName = "friend";
let greeting = `Hello, ${userName}.`;

// console.log(greeting)
// console.log(typeof greeting)

let longString = `Hello, and welcome to the application!
Get started by logging in below!
We're happy to have you.`;

// console.log(longString)
// console.log(`This is ${longString}`)

//! converting NUMBER to STRING

let numOne = 123.456;               //! variable is numOne
let strOne = numOne.toString();     //! variable.toString() method

console.log(numOne)
console.log(typeof numOne)

console.log(strOne)
console.log(typeof strOne)

let numTwo = 123.456                //! variable is numTwo
let strTwo = String(numTwo)         //! string(variable) method

console.log(strTwo)
console.log(typeof strTwo)         

let numThree = 123.123456           //! variable is numThree
let strThree = numThree.toFixed(2)  //! variable.toFixed("insert decimal point")
                                    //! ans 123.12 in string.

console.log("Method toFix: ",strThree)
console.log(typeof strThree)    

//! converting STRING to NUMBER

let  strFour = '1234.1234'          //! variable is strFour
let numFour = parseInt(strFour)

console.log(numFour)                //! parseInt(variable)

let strFive = '1234.4321'           //! variable is strFive
let numFive = parseFloat(strFive)   //! parseFloat(variable)

console.log(numFive)

let strSix = "3333.33333"           //! variable is strSix
let numSix = Number(strSix)         //! Number(variable)

console.log(numSix)

let test1 = test2 = test3 = 'test'

console.log(test1)
console.log(test2)
console.log(test3)



