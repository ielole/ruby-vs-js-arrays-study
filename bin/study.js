'use strict';

// Repeat Ruby Lab for JS

let myArray = [1, 2, 3, 4, 5];
// Assign `20` to the element at `length+1`.
myArray[myArray.length+1] = 20;

// Access the 3rd element from the end of an array length of 5.
myArray[myArray.length-3];

// Access element 9 for a length of 5 elements.
myArray[9];

// Assign [-12, -49] to the range starting from 5th element from the end, for a length of 3.
myArray.splice(myArray.length-5, 3, [-12, -29]);
myArray = [].concat.apply([], myArray);

// Access all the elements starting at index 1.
for (let i = 1; i < myArray.length; i++) {
  console.log(myArray[i]);
};

// Repeat Ruby Bonus for JS
let arrayTimesTwo = new Array(10).fill(1).map((e, i) => i *2);
