const m = require("../infixToPostfix");

test('TestCases 1', () => {
  expect(m.toPostfix("2+7*5")).toBe("275*+");
  expect(m.toPostfix("1^2^3")).toBe("123^^");
  expect(m.toPostfix("3*3/(7+1)")).toBe("33*71+/");
  expect(m.toPostfix("5+(6-2)*9+3^(7-1)")).toBe("562-9*+371-^+");
});