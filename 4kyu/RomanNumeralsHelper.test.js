const m = require('./RomanNumeralsHelper');
const RM = new m.RomanNumerals();

test('1000 = M', () => {
  expect(RM.toRoman(1000)).toBe('M');
});
test('999 = CMXCIX', () => {
  expect(RM.toRoman(999)).toBe('CMXCIX');
});
test('4 = IV', () => {
  expect(RM.toRoman(4)).toBe('IV');
});
test('1 = I', () => {
  expect(RM.toRoman(1)).toBe('I');
});
test('1911 = MCMXCI', () => {
  expect(RM.toRoman(1991)).toBe('MCMXCI');
});
test('2006 = MMVI', () => {
  expect(RM.toRoman(2006)).toBe('MMVI');
});
test('2020 = MMXX', () => {
  expect(RM.toRoman(2020)).toBe('MMXX');
});
test('NEGATIVE', () => {
  expect(RM.toRoman(-100)).toBe('');
})

test('fromRoman', () => {
  expect(RM.fromRoman('XXI')).toBe(21);
  expect(RM.fromRoman('I')).toBe(1);
  expect(RM.fromRoman('III')).toBe(3);
  expect(RM.fromRoman('IV')).toBe(4);
  expect(RM.fromRoman('MMVII')).toBe(2007);
  expect(RM.fromRoman('MDCLXIX')).toBe(1669);
  
  expect(RM.fromRoman('ABCDEFG')).toBeNaN();
});
