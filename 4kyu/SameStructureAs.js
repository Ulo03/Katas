import { assertEquals } from '../testing.js';

Array.prototype.sameStructureAs = function (other) {
  var first = JSON.stringify(this).replace(/[0-9]/g, 'X');
  var second = JSON.stringify(other).toString().replace(/[0-9]/g, 'X');
  if (first == second) {
    return true;
  } else {
    return false;
  }
};

Deno.test('sameStructureAs', () => {
  assertEquals([1, 1, 1].sameStructureAs([2, 2, 2]), true);
  assertEquals([1, [1, 1]].sameStructureAs([[2, 2], 2]), false);
});
