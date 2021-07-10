const m = require("../CodewarsRS");

const user = new m.User();
test('CodewarsRS ... OK', () => {
  expect(user.rank).toBe(-8);
  expect(user.progress).toBe(0);
  user.incProgress(-7);
  expect(user.progress).toBe(10);
  user.incProgress(-5);
  expect(user.progress).toBe(0);
  expect(user.rank).toBe(-7);
  user.incProgress(-7);
  user.incProgress(-8);
  user.incProgress(-3);
  user.incProgress(-8);
  expect(user.progress).toBe(65);
  expect(user.rank).toBe(-6);
});

test('CodewarsRS ... BAD', () => {
  expect(() => {user.incProgress(-10)}).toThrow('ERROR');
});

test('CodewarsRS ... MAX', () => {
  user.incProgress(8);
  expect(user.rank).toBe(8);
});