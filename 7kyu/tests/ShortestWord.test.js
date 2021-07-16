const m = require('../ShortestWord');

test('TestCases 1', () => {
  expect(m.findShort("bitcoin take over the world maybe who knows perhaps")).toBe(3);
  expect(m.findShort("turns out random test cases are easier than writing out basic ones")).toBe(3);
});