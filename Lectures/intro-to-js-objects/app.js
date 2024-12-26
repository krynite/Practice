//----------------------- Practice 1 -----------------------\\

// const music = {};
// console.log(typeof music)

//----------------------- Practice 2 -----------------------\\

// const music = {currentTrack: 'Just Ken'}
// console.log(music)

//----------------------- Practice 3 (Adding Object)-----------------------\\

// const music = {                 //! same as const music = {currentTrack: 'Just Ken', volume: 70}
//     currentTrack: 'Just Ken',
//     volume: 70
// };

// console.log(music)

//----------------------- Practice 3 (Addint Object via Dot) -----------------------\\

// Adding Array into 
// Object = music
// Key = currentPlaylist
// Value (Array) = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'] 

// music.currentPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];
// console.log(music.currentPlaylist) 

//----------------------- Practice 4 (To do) -----------------------\\
// Whats playing? Can you print the property currentTrack to the console?

// console.log(`This is the Current Track: ${music.currentTrack}`)

//----------------------- Practice 5 (Changing Object's Property) -----------------------\\
                            //! Property means "key: value".

// const music = {
//   currentTrack: 'Just Ken',
//   currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
//   volume: 70, 
// }

// music.volume = 60;

// console.log(music.volume)   //! Lowered volume from 70 tyo 60.


//----------------------- Practice 6 (To do) -----------------------\\
// Create a new playlist array called myPlaylist on your music object. Make sure to include a couple of your favorite songs in there.
// Practice printing myPlaylist to the console.
// Delete myPlaylist using the delete keyword.
// Print the music object to the console to verify myPlaylist has been deleted.

// music.myPlaylist = ['Chewabanca','Original Prankster', 'Codec'];
// console.log(`Display My Playlist: ${music.myPlaylist}`)

// delete music.myPlaylist;

// console.log(`Display My Playlist: ${music.myPlaylist}`)

//----------------------- Practice 7 (Methods) -----------------------\\

// const music = {
//   currentTrack: 'Just Ken',
//   currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
//   volume: 70,
//   // add the following:
//   mute() {
//     music.volume = 0;
//   },
// };

//! NOTICE its the same as EXAMPLE 2 below line 88-92
// music.mute = function () {          //! NOTICE this is a Function within an Object
// music.volume = 0;                   //! NOTICE this function is the same as line 70-71.
// };                                  //! NOTICE Not an arrow Function. (Arrow doesn't work here!)

//! Below REMINDER on the difference in the way of writing Functions

//! Normal Functions (EXAMPLE 1)
//!     function functionName(parameters1,parameter2...)    {
//!     statmentsHere;
//!     return statementHere; (This is optional)
//!     };

//! Shorter Functions (EXAMPLE 2)
//!     const functionName = function (parameters1,parameter2...)   {
//!     statmentsHere;
//!     return statementHere; (This is optional)
//!     };

//! Arrow Functions (EXAMPLE 3)
//!     const functionName(parameters1,parameter2...) =>   {        //Does not work in Method (AKA Function within an Object)
//!     statmentsHere;
//!     return statementHere; (This is optional)
//!     };


//----------------------- Practice 8 Methods (To do) -----------------------\\
// const music = {
//   currentTrack: 'Just Ken',
//   trackIdx: 0,
//   currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
//   volume: 70,
//   mute() {
//     music.volume = 0;
//   },
//   next() {
//     music.trackIdx += 1;
//     music.currentTrack = music.currentPlaylist[music.trackIdx] || 0;
//     if(music.trackIdx === music.currentPlaylist.length) {                   //! Added IF statement to rotate the playlist. 
//         music.trackIdx = 0;
//         music.currentTrack = music.currentPlaylist[music.trackIdx] || 0;
//     }    //! Needs to be inside the "next()" method to update the new music.currentTrack.
//   },
// };

// // music.currentTrack = music.currentPlaylist[music.trackIdx] || 0;            //! This is the wrong position. It needs to be updated.

// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// console.log(music.trackIdx)
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);
// music.next();
// console.log(music.trackIdx)
// console.log(`Current Music: Track No. ${music.trackIdx+1} - ${music.currentTrack}`);


//----------------------- Practice 9 Data Structures -----------------------\\

const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist : [
  {
    title: 'Just Ken',
    artist: 'Ryan Gosling',
    album: 'Barbie The Album',
    length: '3:43',
  }, {
    title: 'Hey Blondie',
    artist: 'Dominic Fike',
    album: 'Barbie The Album',
    length: '2:21',
  }, {
    title: 'What Was I Made For',
    artist: 'Billie Eilish',
    album: 'Barbie The Album',
    length: '3:42',
  }, {
    title: 'Dance The Night',
    artist: 'Dua Lipa',
    album: 'Barbie The Album',
    length: '2:56',
  }
    ],

  volume: 70,
  mute(){
    this.volume = 0
  },
  next(){
    this.trackIdx += 1
    this.currentTrack = this.currentPlaylist[this.trackIdx].title.toString() || 0;
    if(music.trackIdx === music.currentPlaylist.length) {                   //! Added IF statement to rotate the playlist. 
        music.trackIdx = 0;
        music.currentTrack = music.currentPlaylist[music.trackIdx];
    }
  }
}

// console.log(music.trackIdx)
// console.log(music.currentTrack)
console.log(`Current Number of Songs in Playlist: ${music.currentPlaylist.length}`)
// console.log(music.trackIdx)
console.log(`Current Music Track No. ${music.trackIdx+1} - ${music.currentTrack}`)
music.next();
console.log(`Current Music Track No. ${music.trackIdx+1} - ${music.currentTrack}`)
music.next();
console.log(`Current Music Track No. ${music.trackIdx+1} - ${music.currentTrack}`)
music.next();
console.log(`Current Music Track No. ${music.trackIdx+1} - ${music.currentTrack}`)
music.next();
console.log(`Current Music Track No. ${music.trackIdx+1} - ${music.currentTrack}`)

console.log(typeof music.currentTrack)