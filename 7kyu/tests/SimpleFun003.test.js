const m = require('../SimpleFun003');

test('T1', () => {
    expect(m.lateRide(240)).toBe(4);
});
test('T2', () => {
    expect(m.lateRide(808)).toBe(14);
});
test('T3', () => {
    expect(m.lateRide(1439)).toBe(19);
});
test('T4', () => {
    expect(m.lateRide(0)).toBe(0);
});
test('T5', () => {
    expect(m.lateRide(23)).toBe(5);
});
test('T6', () => {
    expect(m.lateRide(8)).toBe(8);
});