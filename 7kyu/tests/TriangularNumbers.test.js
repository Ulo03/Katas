const m = require('../TriangularNumbers');

test('TestCases 1', () => {
    expect(m.isTriangular(1)).toBeTruthy();
    expect(m.isTriangular(3)).toBeTruthy();
    expect(m.isTriangular(6)).toBeTruthy();
    expect(m.isTriangular(10)).toBeTruthy();
    expect(m.isTriangular(15)).toBeTruthy();
    expect(m.isTriangular(21)).toBeTruthy();
    expect(m.isTriangular(28)).toBeTruthy();

    expect(m.isTriangular(2)).toBeFalsy();
    expect(m.isTriangular(7)).toBeFalsy();
    expect(m.isTriangular(14)).toBeFalsy();
    expect(m.isTriangular(27)).toBeFalsy();

    expect(m.isTriangular(0)).toBeFalsy();
});