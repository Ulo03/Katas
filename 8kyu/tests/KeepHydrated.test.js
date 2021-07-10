const m = require('../KeepHydrated');

test('KeepHydrated', () => {
  expect(m.litres(3)).toBe(1);
  expect(m.litres(6.7)).toBe(3);
  expect(m.litres(11.8)).toBe(5);
});
