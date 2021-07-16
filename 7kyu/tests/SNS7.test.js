const m = require('../SNS7');

test('TestCases 1', () => {
  expect(m.extraPerfect(3)).toStrictEqual([1, 3]);
});