// https://www.codewars.com/kata/55685cd7ad70877c23000102
import { assertEquals } from '../testing.js';

function makeNegative(num) {
  return num > 0 ? -num : num;
}

Deno.test('makeNegative', () => {
  makeNegative(42, -42);
  makeNegative(-10, -10);
  makeNegative(0, 0);
  makeNegative(-0, 0);
});
