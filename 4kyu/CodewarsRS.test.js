const m = require("./CodewarsRS");

const user = new m.User();
test('CodewarsRS', () => {
  expect(user.rank).toBe(-8);
  expect(user.progress).toBe(0);
  user.incProgress(-7);
  expect(user.progress).toBe(10);
  user.incProgress(-5);
  expect(user.progress).toBe(0);
  expect(user.rank).toBe(-7);
});
