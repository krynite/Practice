Math.random()
console.log(Math.random())

let num = 12.9;
console.log(`Given Num is: ${num}`)

console.log(`Truncated Num is: ${Math.floor(num)}`)
let randomNumber = Math.random()
console.log(randomNumber)

const birthday = new Date("2023-08-31")     //! Notice the "new". This is only applicable in "Class" and not in "Objects"
console.log(birthday)

let year = birthday.getFullYear();
console.log(year) // 2023

let month = birthday.getMonth();
console.log(month) //! Notice it is -1 than the given. Original 8, returned 7.

let day = birthday.getDate();
console.log(day)  // 31

let getNow = Date.now()
console.log(getNow)
// let nowMonth = getNow.getDate();     //! Notice: Even though both uses time format from 1st Jan 1970 UTC. Date.now() and birthday.getDate() share the same Epoch format but cannot get the month or others.
                                        //? Maybe a function to convert from Epoch to normal getFullYear?
// console.log(nowMonth)

if (birthday.getTime() < Date.now()) {
    console.log("Happy belated birthday!")
}
