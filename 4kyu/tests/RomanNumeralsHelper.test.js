const m = require('../RomanNumeralsHelper');
const RM = new m.RomanNumerals();

test('toRoman ... OK', () => {
  expect(RM.toRoman(1000)).toBe('M');
  expect(RM.toRoman(999)).toBe('CMXCIX');
  expect(RM.toRoman(4)).toBe('IV');
  expect(RM.toRoman(1)).toBe('I');
  expect(RM.toRoman(1991)).toBe('MCMXCI');
  expect(RM.toRoman(2006)).toBe('MMVI');
  expect(RM.toRoman(2020)).toBe('MMXX');
});

test('toRoman ... BAD', () => {
  expect(RM.toRoman(-100)).toBe('');
})

test('fromRoman ... OK', () => {
  expect(RM.fromRoman('XXI')).toBe(21);
  expect(RM.fromRoman('I')).toBe(1);
  expect(RM.fromRoman('III')).toBe(3);
  expect(RM.fromRoman('IV')).toBe(4);
  expect(RM.fromRoman('MMVII')).toBe(2007);
  expect(RM.fromRoman('MDCLXIX')).toBe(1669);
});

test('fromRoman ... BAD', () => {
  expect(RM.fromRoman('ABCDEFG')).toBeNaN();
});