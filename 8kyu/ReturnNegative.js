// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  return num > 0 ? -num : num;
}

makeNegative(42);     //?$==-42
makeNegative(-10);    //?$==-10
makeNegative(0);      //?$==0
makeNegative(-0);     //?$==0