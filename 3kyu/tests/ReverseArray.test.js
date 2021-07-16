const m = require("../ReverseArray");

test('TestCases 1', () => {
  expect(m.reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});