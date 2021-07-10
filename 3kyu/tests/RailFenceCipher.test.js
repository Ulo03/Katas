const m = require('../RailFenceCipher');

test('encodeRailFenceCipher ... OK', () => {
  expect(m.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toBe(
    'WECRLTEERDSOEEFEAOCAIVDEN'
  );
  expect(m.encodeRailFenceCipher('Hello, World!', 3)).toBe('Hoo!el,Wrdl l');
  expect(m.encodeRailFenceCipher('Hello, World!', 4)).toBe('H !e,Wdloollr');
});

test('decodeRailFenceCipher ... OK', () => {
  expect(m.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).toBe(
    'WEAREDISCOVEREDFLEEATONCE'
  );
  expect(m.decodeRailFenceCipher('Hoo!el,Wrdl l', 3)).toBe('Hello, World!');
  expect(m.decodeRailFenceCipher('H !e,Wdloollr', 4)).toBe('Hello, World!');
});

test('encodeRailFenceCipher ... BAD', () => {
  expect(m.encodeRailFenceCipher('', 2)).toBe('');
  expect(m.encodeRailFenceCipher('Test123', 1)).toBe('');
  expect(m.encodeRailFenceCipher('', 1)).toBe('');
});

test('decodeRailFenceCipher ... BAD', () => {
  expect(m.decodeRailFenceCipher('', 2)).toBe('');
  expect(m.decodeRailFenceCipher('Test123', 1)).toBe('');
  expect(m.decodeRailFenceCipher('', 1)).toBe('');
});