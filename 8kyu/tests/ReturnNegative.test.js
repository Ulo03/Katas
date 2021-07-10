const m = require('../ReturnNegative');

test('makeNegative', () => {
  expect(m.makeNegative(42)).toBe(-42);
  expect(m.makeNegative(-10)).toBe(-10);
  expect(m.makeNegative(0)).toBe(0);
});