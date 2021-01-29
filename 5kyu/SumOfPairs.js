// https://www.codewars.com/kata/54d81488b981293527000c8f
import { assertEquals } from '../testing.js';

function sum_pairs(ints, s) {
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] == s) return [ints[i], ints[j]];
    }
  }
  return undefined;
}

Deno.test('sumOfPairs', () => {
  let l1 = [1, 4, 8, 7, 3, 15];
  let l2 = [1, -2, 3, 0, -6, 1];
  let l3 = [20, -13, 40];
  let l4 = [1, 2, 3, 4, 1, 0];
  let l5 = [10, 5, 2, 3, 7, 5];
  let l6 = [4, -2, 3, 3, 4];
  let l7 = [0, 2, 0];
  let l8 = [5, 9, 13, -3];

  assertEquals(sum_pairs(l1, 8), [1, 7]);
  assertEquals(sum_pairs(l2, -6), [0, -6]);
  assertEquals(sum_pairs(l3, -7), undefined);
  assertEquals(sum_pairs(l4, 2), [1, 1]);
  assertEquals(sum_pairs(l5, 10), [5, 5]);
  assertEquals(sum_pairs(l6, 8), [4, 4]);
  assertEquals(sum_pairs(l7, 0), [0, 0]);
  assertEquals(sum_pairs(l8, 10), [13, -3]);
});
