//https://www.codewars.com/kata/52a78825cdfc2cfc87000005
import { assertEquals } from '../testing.js';

const calc = (expression) => {
  var exp = expression.match(/(([0-9]*)||\+||\-||\*||\/||\(||\))?/g);
  exp = exp.filter((e) => {
    return e != '';
  });
  return exp;
};

console.log(calc('150+-50'));
console.log(calc('1500+50*300-20'));
