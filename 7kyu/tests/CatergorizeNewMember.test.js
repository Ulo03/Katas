const m = require('../CategorizeNewMember');

test('TestCases 1', () => {
  expect(m.openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  expect(m.openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
  expect(m.openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open']);
});