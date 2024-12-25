const movies = ['Barbie', 'Interstellar', 'Get Out'];

const firstMovie = movies[0];

console.log(firstMovie)
console.log(`Movie in Library: ${movies}`)      //! Use back tick "`" in you want to write ${xxxX}
console.log(`Number Movie in Library: ${movies.length}`)

const lastMovie = movies[movies.length-1]
console.log(`Last Movie is: ${lastMovie}`)

movies[1] = 'Arrival'
console.log(`Movie in Library: ${movies}`) 

movies.push('Parasite', 'Dune')                 //! Add to last of Array
console.log(`Movie in Library: ${movies}`) 

movies.pop()                                    //! Remove from last of Array
console.log(`Movie in Library: ${movies}`) 

for (let i = 0; i<movies.length; i++){
    console.log(`List of movies: ${i+1}. ${movies[i]}`)
}
console.log(`----------- FOR LOOPS (For Of, For In, For Each) ------------------------------------------------------------------`);



for (let movie of movies) {                     //! Shows all items in Array via For Of loop
console.log(movie);
}
for (let movieIn in movies) {                   //! Shows all array numbers in Array via For In loop
console.log(movieIn);
}
console.log(`-----------  For Each  ------------------------------------------------------------------`);


                                    //! (movie) in line below is the CALL BACK FUNCTION 
movies.forEach((movie) => {         //! Look below for proper indentation!   SAME? >>>      //! movies.forEach(function(movie) {
    console.log(movie)                                                                      //!     console.log(movie);
});                                                                                         //! });

//! This is how it actually looks like when indented properly. 

//! movies.forEach(
//!     (movie) => {
//!         console.log(movie);
//!     }
//! );

//! Below an explaination: 

//! EXAMPLE: array.Function((internalVariableName) => 
//!                             {
//!                                 Whatever you want the function to do.
//!                             }
//!                         );


movies.forEach((movie, index) =>{
    if(index === 2) console.log(`This is the third movie: ${movie}`)
})

//! Other ways or writing

//! movies.forEach((movie, index) =>{
//!     if(index === 2) { 
//!                         console.log(`This is the tird movie: ${movie}`)
//!                     }
//!                                 })


console.log(`-----------  join()  ------------------------------------------------------------------`);

let movieString = movies.join();                                //! No Separator
console.log(`Movie string for join(); ${movieString}`)

let movieStringWithSeparater = movies.join('--');               //! With Separator --
console.log(`Movie string for join(); ${movieStringWithSeparater}`)

let movieStringWithSeparater1 = movies.join(' -- ');            //! With Separator ' -- '
console.log(`Movie string for join(); ${movieStringWithSeparater1}`)

let movieStringWithSeparater2 = movies.join(' IamAseparator '); //! With Separator ' IamAseparator '
console.log(`Movie string for join(); ${movieStringWithSeparater2}`)


console.log(`-----------  at()  ------------------------------------------------------------------`);

const lastMovieAt = movies.at(-1);   //! Negative number does not cycle again.
console.log(movies)
console.log(lastMovieAt)             //! Answer: Parasite



console.log(`-----------  unshift() and shift() ------------------------------------------------------------------`);
//! Current movies = [ 'Barbie', 'Arrival', 'Get Out', 'Parasite' ]


movies.unshift('Dune', 'John Wick') //! unshift is ADD from FRONT
console.log(movies)

movies.shift();
console.log(movies)
movies.shift();
console.log(movies)



console.log(`-----------  break; continue; ------------------------------------------------------------------`);
//? [ 'Barbie', 'Arrival', 'Get Out', 'Parasite' ]
for (let movie of movies) {
  if (movie === 'Get Out') break;   //! Once it hits `Get Out`, it exits for immediately.
  console.log(movie);
}

for (let movie of movies) {
  console.log("Another iteration");
  if (movie === 'Barbie') continue; //! Breaks from current iteration of For loop, and continues.
  if (movie === 'Get Out') break;
  console.log(movie);
}



console.log(`-----------  using "..."  Shallow Copy ------------------------------------------------------------------`);

const moviesCopy = [...movies];     //! Identical copy of movies.
console.log(moviesCopy);

const moreMovies = ["The Matrix", ...movies]
console.log(moreMovies);    //! Ans [ 'The Matrix', 'Barbie', 'Arrival', 'Get Out', 'Parasite' ]




console.log(`-----------  slice(), slice(start), slice(start,end) ------------------------------------------------------------------`);
//? [ 'The Matrix', 'Barbie', 'Arrival', 'Get Out', 'Parasite' ]

const twoMovies = movies.slice(1)
console.log(`Cut from Index no. 1 and onwards: ${twoMovies}`)   //! Notice that they dont include the index you selected.
// Answer: Arrival,Get Out,Parasite

const numArrayTest = [0,1,2,3,4,5,6,7,8,9]
const sliceTestCutFrontAndBack = numArrayTest.slice(2,6)        //! Notice that they dont include the index you selected.
console.log(`Cut from Index no. 1 index 6 onwards: ${sliceTestCutFrontAndBack}`)
// Answer: 2,3,4,5



console.log(`-----------  Shallow Copy using "..." ------------------------------------------------------------------`);

console.log(movies); 
// Answer: [ 'Barbie', 'Arrival', 'Get Out', 'Parasite' ]           //! Shallow Copy does not recreate new Objects within the Array. 
console.log(twoMovies);         //! Deep Copy does recreate new Objects within the Array. 
// Answer: [ 'Arrival', 'Get Out', 'Parasite' ]

movies[1] = 'Spider-man';       //! Notice that both changed.

console.log(movies);
// Answer: [ 'Barbie', 'Spider-man', 'Get Out', 'Parasite' ]
console.log(twoMovies);
// Answer: [ 'Arrival', 'Get Out', 'Parasite' ]



console.log(`-----------  structuredClone() Deep Copy ------------------------------------------------------------------`);
//? [ 'Barbie', 'Spider-man', 'Get Out', 'Parasite' ]

let deepCopy = structuredClone(movies);
deepCopy[1] = 'Prometheus';     //! Notice that only deepCopy changed.
console.log(movies);    
console.log(deepCopy);