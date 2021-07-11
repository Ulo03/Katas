const m = require('../SNS2');

test('TestCases 1', () => {
    expect(m.strong(1)).toStrictEqual("STRONG!!!!");
    expect(m.strong(2)).toStrictEqual("STRONG!!!!");
    expect(m.strong(145)).toStrictEqual("STRONG!!!!");
    expect(m.strong(7)).toStrictEqual("Not Strong !!");
    expect(m.strong(93)).toStrictEqual("Not Strong !!");
    expect(m.strong(185)).toStrictEqual("Not Strong !!");
});