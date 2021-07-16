// https://www.codewars.com/kata/5267faf57526ea542e0007fb
import {assertEquals} from '../testing.js';

let MyMath = {
  round: function (x) {
    return x - parseInt(x) >= 0.5 ? parseInt(x) + 1 : parseInt(x);
  },
  ceil: function (x) {
    return parseInt(x) === x ? x : parseInt(x) + 1;
  },
  floor: function (x) {
    return parseInt(x);
  },
};

Deno.test('MathIssues', () => {
  assertEquals(MyMath.round(5.3), Math.round(5.3));
  assertEquals(MyMath.ceil(5.1), Math.ceil(5.1));
  assertEquals(MyMath.floor(5.8), Math.floor(5.8));
  assertEquals(MyMath.round(), Math.round());
});
