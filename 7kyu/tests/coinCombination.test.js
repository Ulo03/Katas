const m = require('../CoinCombination');

test('TestCases 1', () => {
    expect(m.coinCombo(1)).toStrictEqual([1,0,0,0]);
    expect(m.coinCombo(6)).toStrictEqual([1,1,0,0]);
    expect(m.coinCombo(11)).toStrictEqual([1,0,1,0]);
});