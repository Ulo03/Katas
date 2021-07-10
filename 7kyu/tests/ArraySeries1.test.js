const m = require('../ArraySeries1');

test('TestCases 1', () => {
   expect(m.minSum([5,4,2,3])).toBe(22);
   expect(m.minSum([12,6,10,26,3,24])).toBe(342);
   expect(m.minSum([9,2,8,7,5,4,0,6])).toBe(74);
});