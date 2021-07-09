// https://www.codewars.com/kata/51b66044bce5799a7f000003

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

module.exports.RomanNumerals = RomanNumerals;
