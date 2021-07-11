const m = require('../CountCharactersInString');

test('TestCases 1', () => {
    expect(m.count("aba")).toStrictEqual({a: 2,b: 1});
    expect(m.count("")).toStrictEqual({});
});