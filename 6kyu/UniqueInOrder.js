// https://www.codewars.com/kata/54e6533c92449cc251001667

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
//without any elements with the same value next to each other and preserving the original order of elements.
// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  var res = [];
  var values = [];
  var last = "";
  if (typeof iterable == typeof '') {
    values = iterable.split('');
  } else {
    values = iterable
  }
  values.map(current => {
    if (last != "") {
      if (current != last) {
        res.push(current);
      }
    } else {
      res.push(current);
    }
    last = current;
  });
  return res;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]);