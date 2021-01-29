// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
import { assertEquals } from '../testing.js';

const flip = (d, a) => {
  return d == 'R'
    ? a.sort((a, b) => {
        return a - b;
      })
    : a.sort((a, b) => {
        return b - a;
      });
};

Deno.test('gravityFlip', () => {
  assertEquals(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
  assertEquals(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
});
