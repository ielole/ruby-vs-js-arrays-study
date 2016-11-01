'use strict';

// Repeat Ruby Lab for JS

let myArray = [1, 2, 3, 4, 5];
// Assign `20` to the element at `length+1`.
myArray[myArray.length+1] = 20

// Access the 3rd element from the end of an array length of 5.
myArray[myArray.length-4]

// Access element 9 for a length of 5 elements.
myArray[9]

// Assign `[-12, -49]` to the 5th element from the end.
myArray[myArray.length-6] = [-12, -49]

// Access all the elements starting at index 1.
for (let i = 1; i < myArray.length; i++) {
  console.log(myArray[i]);
};

// Repeat Ruby Bonus for JS
let arrayTimesTwo = new Array(10).fill(1).map((e, i) => i *2);
