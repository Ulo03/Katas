const m = require('../SimpleFun004');

test('Test 1', () => {
  expect(m.phoneCall(3, 1, 2, 20)).toBe(14);
});
test('Test 2', () => {
  expect(m.phoneCall(2, 2, 1, 2)).toBe(1);
});
test('Test 3', () => {
  expect(m.phoneCall(10, 1, 2, 22)).toBe(11);
});
test('Test 4', () => {
  expect(m.phoneCall(2, 2, 1, 24)).toBe(14);
});
test('Test 5', () => {
  expect(m.phoneCall(1, 2, 1, 6)).toBe(3);
});