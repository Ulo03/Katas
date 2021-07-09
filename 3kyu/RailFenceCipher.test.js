const m = require('./RailFenceCipher');

test('encodeRailFenceCipher', () => {
  expect(m.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toBe(
    'WECRLTEERDSOEEFEAOCAIVDEN'
  );
  expect(m.encodeRailFenceCipher('Hello, World!', 3)).toBe('Hoo!el,Wrdl l');
  expect(m.encodeRailFenceCipher('Hello, World!', 4)).toBe('H !e,Wdloollr');
});

test('decodeRailFenceCipher', () => {
  expect(m.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).toBe(
    'WEAREDISCOVEREDFLEEATONCE'
  );
  expect(m.decodeRailFenceCipher('Hoo!el,Wrdl l', 3)).toBe('Hello, World!');
  expect(m.decodeRailFenceCipher('H !e,Wdloollr', 4)).toBe('Hello, World!');
});
