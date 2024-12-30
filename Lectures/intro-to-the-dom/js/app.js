const titleElement = document.querySelector('#main-title')  //! Reminder # is id=, . is class=
// console.dir(titleElement)       //! Terminal/Console in Browser, not in VSCode.

const paragraphElement = document.querySelector('.cool')    //! Thhis is class type.
// console.dir(paragraphElement)

paragraphElement.textContent = 'The placeholder text is gone!';

if (paragraphElement.textContent !== '') {
  console.log('The paragraph has text content!');
}

titleElement.style.textAlign = 'center'
paragraphElement.style.background = 'lightgrey'


//---------------- STEPS FOR ADDING NEW ELEMENT IN HTML ----------------\\


//STE 1 -   Selecting HTML Element to be added
//          Selecting Body in the HTML

const bodyElement = document.querySelector('body');     //! Note: querySelector


//STEP 2 -  Creating a temp Proxy (Like arguments) of the changes/additional items to be added to the body
//!         NOTE: Created Element is not in the HTML yet. Done in step 4.            
const h2Element = document.createElement('h2');         //! Note: createElemet


//STEP 3 -  Editing newly created element.
//!         NOTE: You can do CSS edits/additions here as well.

h2Element.textContent = 'Comments Section';
h2Element.style.textAlign = 'center';
h2Element.style.background = 'lightgrey'             //! Can include style to indicate CSS changes.

//STEP 4 -  Inserting New Element('h2Element') into the selected Element ('body')

// bodyElement.appendChild(h2Element)

//!---------------- Selecting Multiple Elements in DOM (To do) ----------------\\
const commentElements = document.querySelectorAll('li') //ANS: Nodelist(3) [li, li, li]

commentElements.forEach((commentElement) => {
  console.log(commentElement.textContent); 
});

commentElements.forEach((commentElement) => {
   commentElement.style.fontSize = '30px';
})

//---------------- ACcess/Mod Attributes ----------------\\
//! Attributes = id, class etc
//! getAttribute(): Retrieves the value of a specified attribute.
//! setAttribute(): Sets or updates the value of a specified attribute.
//! hasAttribute(): Checks if an element has a certain attribute.
//! removeAttribute(): Removes a specified attribute from an element.

//PRACTICE
//Creating Button that is disable.
const buttonElement = document.querySelector('button')

//Check if button has been disabled using the hasAttribute

if (buttonElement.hasAttribute('disabled') === true) {
  buttonElement.removeAttribute('disabled');
}

buttonElement.setAttribute('id','submit')

buttonElement.classList.add('btn')

buttonElement.classList.remove('btn')

//! add(className, ...) - Adds one or more class names to an element. If the class already exists, it won’t be added again.
//! remove(className, ...) - Removes one or more class names from an element. If the class does not exist, nothing happens.
//! toggle(className) - Adds the class if it does not exist, and removes it if it does.
//! contains(className) - Checks if the element has the specified class.
//! replace(oldClass, newClass) - Replaces an existing class with a new class.

//---------------- Access to ID via getElementbyId ----------------\\

const titleElementById = document.getElementById('comments'); //! ONLY WORKS ON ID
console.dir(titleElementById);


//---------------- innerHtml vs textContent ----------------\\

// paragraphElement.textContent = 'Comments for <strong>today</strong>:';
paragraphElement.innerHTML = 'Comments for <strong>today</strong>:';
// Now h2 is only added after <p></p>
paragraphElement.after(h2Element)

//!---------------- Converting Nodelist to ARRAY!!! ----------------\\

// const itemEls = Array.from(commentElements)      //! Either Works
const itemEls = [...commentElements];               //! Might prefer this one since it recreates

