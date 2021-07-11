const m = require('../SNS6');

test('TestCases 1', () => {
    expect(m.automorphic(1)).toStrictEqual('Automorphic');
    expect(m.automorphic(3)).toStrictEqual('Not!!');
    expect(m.automorphic(6)).toStrictEqual('Automorphic');
    expect(m.automorphic(9)).toStrictEqual('Not!!');
    expect(m.automorphic(25)).toStrictEqual('Automorphic');
    expect(m.automorphic(53)).toStrictEqual('Not!!');
    expect(m.automorphic(76)).toStrictEqual('Automorphic');
    expect(m.automorphic(95)).toStrictEqual('Not!!');
    expect(m.automorphic(625)).toStrictEqual('Automorphic');
    expect(m.automorphic(225)).toStrictEqual('Not!!');
});