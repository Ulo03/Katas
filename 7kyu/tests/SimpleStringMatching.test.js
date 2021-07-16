const m = require('../SimpleStringMatching');

test('TestCases ... OK', () => {
  expect(m.solve("code*s", "codewars")).toBeTruthy();
  expect(m.solve("codewar*s", "codewars")).toBeTruthy();
  expect(m.solve("c", "c")).toBeTruthy();
  expect(m.solve("*s", "codewars")).toBeTruthy();
  expect(m.solve("*s", "s")).toBeTruthy();
  expect(m.solve("s*", "s")).toBeTruthy();
  expect(m.solve("aa*", "aaa")).toBeTruthy();
  expect(m.solve("*", "codewars")).toBeTruthy();
});

test('TestCases ... BAD', () => {
  expect(m.solve("code*warrior", "codewars")).toBeFalsy();
  expect(m.solve("aa", "aaa")).toBeFalsy();
  expect(m.solve("aaa", "aa")).toBeFalsy();
  expect(m.solve("aaa*", "aa")).toBeFalsy();

});