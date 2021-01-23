// Triangular number is the amount of points that can fill equilateral triangle.

// Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

// alt text

// Hint!
// T(n) = n * (n + 1) / 2,
// n - is the size of one side.
// T(n) - is the triangular number.
// Given a number 'T' from interval [1; 2147483646], find if it is triangular number or not.

const isTriangular = (num) => {
  if (num<=0) return false;
  var sum = 0;
  for (let i=1; sum <= num; i++) {
    sum += i;
    if (sum === num) return true;
  }
  return false;
}

isTriangular(1); //?.$==true
isTriangular(3); //?.$==true
isTriangular(6); //?.$==true
isTriangular(10); //?.$==true
isTriangular(15); //?.$==true
isTriangular(21); //?.$==true
isTriangular(28); //?.$==true

isTriangular(2); //?.$==false
isTriangular(7); //?.$==false
isTriangular(14); //?.$==false
isTriangular(27); //?.$==false