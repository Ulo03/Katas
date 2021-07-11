const m = require('../SNS3');

test('TestCases 1', () => {
    expect(m.disariumNumber(89)).toStrictEqual('Disarium !!');
    expect(m.disariumNumber(564)).toStrictEqual('Not !!');
    expect(m.disariumNumber(1024)).toStrictEqual('Not !!');
    expect(m.disariumNumber(135)).toStrictEqual('Disarium !!');
    expect(m.disariumNumber(136586)).toStrictEqual('Not !!');
});