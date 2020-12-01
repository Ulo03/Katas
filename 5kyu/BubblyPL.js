// https://www.codewars.com/kata/5f7a715f6c1f810017c3eb07

const 
  start = c => c([]),
  end = ([x]) => x,
  push = xs => x => c => c([x, ...xs]),
  add = ([x, y, ...xs]) => c => c([x + y, ...xs]),
  sub = ([x, y, ...xs]) => c => c([x - y, ...xs]),
  mul = ([x, y, ...xs]) => c => c([x * y, ...xs]),
  div = ([x, y, ...xs]) => c => c([x / y | 0, ...xs]);

(start)(push)(5)(push)(3)(add)(end); //?.$==8