// https://www.codewars.com/kata/51b66044bce5799a7f000003
import { assertEquals } from '../testing.js';

const RM = new RomanNumerals();
function RomanNumerals() {
  const torom = new Map([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]);
  const fromrom = new Map(Array.from(torom, (a) => a.reverse()));

  this.toRoman = function toRoman(num) {
    var res = '';
    while (num > 0) {
      var max = getMax(num);
      res += torom.get(max);
      num -= max;
    }
    return res;
  };

  this.fromRoman = function fromRoman(rom) {
    var res = 0;
    var roms = getRoms(rom);
    roms.forEach((e) => {
      res += fromrom.get(e);
    });
    return res;
  };

  function getRoms(rom) {
    var roms = [];
    var sym = [
      'I',
      'IV',
      'V',
      'IX',
      'X',
      'XL',
      'L',
      'XC',
      'C',
      'CD',
      'D',
      'CM',
      'M',
    ];
    for (let i = 0; i < rom.length; i++) {
      if (sym.includes(rom[i] + rom[i + 1])) {
        roms.push(rom[i] + rom[i + 1]);
        i++;
      } else {
        roms.push(rom[i]);
      }
    }
    return roms;
  }

  function getMax(num) {
    const revmap = new Map(Array.from(torom, (a) => a.reverse()).reverse());
    for (const [key, value] of revmap.entries()) {
      if (value <= num) {
        return value;
      }
    }
    return -1;
  }
}

Deno.test('toRoman', () => {
  assertEquals(RM.toRoman(1000), 'M');
  assertEquals(RM.toRoman(999), 'CMXCIX');
  assertEquals(RM.toRoman(4), 'IV');
  assertEquals(RM.toRoman(1), 'I');
  assertEquals(RM.toRoman(1991), 'MCMXCI');
  assertEquals(RM.toRoman(2006), 'MMVI');
  assertEquals(RM.toRoman(2020), 'MMXX');

  assertEquals(RM.toRoman(-100), '');
});

Deno.test('fromRoman', () => {
  assertEquals(RM.fromRoman('XXI'), 21);
  assertEquals(RM.fromRoman('I'), 1);
  assertEquals(RM.fromRoman('III'), 3);
  assertEquals(RM.fromRoman('IV'), 4);
  assertEquals(RM.fromRoman('MMVII'), 2007);
  assertEquals(RM.fromRoman('MDCLXIX'), 1669);

  assertEquals(RM.fromRoman('ABCDEFG'), NaN);
});
