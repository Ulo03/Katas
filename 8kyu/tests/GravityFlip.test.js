const m = require('../GravityFlip');

test('gravityFlip', () => {
  expect(m.flip('R', [3, 2, 1, 2])).toStrictEqual([1, 2, 2, 3]);
  expect(m.flip('L', [1, 4, 5, 3, 5])).toStrictEqual([5, 5, 4, 3, 1]);
});