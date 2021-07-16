const m = require('../SNS5');

test('TestCases 1', () => {
  expect(m.specialNumber(2)).toStrictEqual('Special!!');
  expect(m.specialNumber(3)).toStrictEqual('Special!!');
  expect(m.specialNumber(6)).toStrictEqual('NOT!!');
  expect(m.specialNumber(9)).toStrictEqual('NOT!!');
  expect(m.specialNumber(11)).toStrictEqual('Special!!');
  expect(m.specialNumber(55)).toStrictEqual('Special!!');
  expect(m.specialNumber(26)).toStrictEqual('NOT!!');
  expect(m.specialNumber(92)).toStrictEqual('NOT!!');
  expect(m.specialNumber(25432)).toStrictEqual('Special!!');
  expect(m.specialNumber(2783)).toStrictEqual('NOT!!');
});