const m = require('../SimpleFun002');

test('T1', () => {
    expect(m.circleOfNumbers(10,2)).toBe(7);
});
test('T2', () => {
    expect(m.circleOfNumbers(10,7)).toBe(2);
});
test('T3', () => {
    expect(m.circleOfNumbers(4,1)).toBe(3);
});
test('T4', () => {
    expect(m.circleOfNumbers(6,3)).toBe(0);
});