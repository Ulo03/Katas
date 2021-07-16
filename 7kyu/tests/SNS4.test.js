const m = require('../SNS4');

test('TestCases 1', () => {
  expect(m.jumpingNumber(1)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(7)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(9)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(23)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(32)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(79)).toStrictEqual('Not!!');
  expect(m.jumpingNumber(98)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(8987)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(4343456)).toStrictEqual('Jumping!!');
  expect(m.jumpingNumber(98789876)).toStrictEqual('Jumping!!');
});