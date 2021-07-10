const m = require('../NumberOfPeopleInTheBus');

test('TestCases 1', () => {
    expect(m.number([[10,0],[3,5],[5,8]])).toBe(5);
    expect(m.number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
    expect(m.number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21);
});