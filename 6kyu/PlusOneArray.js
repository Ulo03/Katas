// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

// Given an array of integers of any length, 
//return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
  return ((Math.min.apply(Math, arr) < 0) || (Math.max.apply(Math, arr) > 9) || arr == 0) ? null :
    ((+(arr.toString().replace(/,/g, "")) + 1).toString().split("").map(Number));
}


console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);