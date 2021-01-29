// https://www.codewars.com/kata/520b9d2ad5c005041100000f
import { assertEquals } from '../testing.js';

function pigIt(str) {
  var res = [];
  str.split(' ').map((e) => {
    if (e.match(/\w/g)) {
      var first = e.charAt(0);
      res.push(e.slice(1) + first + 'ay');
    } else {
      res.push(e);
    }
  });
  return res.join(' ');
}

Deno.test('pigLatin', () => {
  assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
  assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
});
