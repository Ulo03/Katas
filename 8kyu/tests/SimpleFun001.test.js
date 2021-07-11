const m = require('../SimpleFun001');

test('T1', () => {
    expect(m.seatsInTheater(16,11,5,3)).toBe(96);
});
test('T2', () => {
    expect(m.seatsInTheater(1,1,1,1)).toBe(0);
});
test('T3', () => {
    expect(m.seatsInTheater(13,6,8,3)).toBe(18);
});
test('T4', () => {
    expect(m.seatsInTheater(60,100,60,1)).toBe(99);
});
test('T5', () => {
    expect(m.seatsInTheater(1000,1000,1000,1000)).toBe(0);
});
test('T6', () => {
    expect(m.seatsInTheater(0,1,1,1)).toBe(0);
});
test('T7', () => {
    expect(m.seatsInTheater(10,20,5,25)).toBe(0);
});