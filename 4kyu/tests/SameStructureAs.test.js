const m = require('../SameStructureAs');

test('sameStructureAs', () => {
  expect([1, 1, 1].sameStructureAs([2, 2, 2])).toBe(true);
  expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toBe(false);
});