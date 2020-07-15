// Task
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 
//It should follow the API demonstrated in the examples below. 
//Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately 
//starting with the left most digit and skipping any digit with a value of zero. 
//In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
//2008 is written as 2000=MM, 8=VIII; or MMVIII. 
//1666 uses each Roman symbol in descending order: MDCLXVI.

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

var RomanNumerals = new RomanNumerals();
function RomanNumerals() {

    const torom = new Map([[1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], 
    [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]]);
    const fromrom = new Map(Array.from(torom, a => a.reverse()));

    this.toRoman = function toRoman(num) {
        var res = "";
        while (num > 0) {
            var max = getMax(num);
            res += torom.get(max);
            num -= max;
        }
        return res;
    }

    this.fromRoman = function fromRoman(rom) {
        var res = 0;
        var roms = getRoms(rom);
        roms.forEach(e => {
            res += fromrom.get(e);
        });
        return res;
    }

    function getRoms(rom) {
        var roms = [];
        var sym = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
        for (let i = 0; i < rom.length; i++) {
            if (sym.includes(rom[i] + rom[i+1])) {
                roms.push(rom[i] + rom[i+1]);
                i++;
            } else {
                roms.push(rom[i]);
            }
        }
        return roms;
    }

    function getMax(num) {
        const revmap = new Map(Array.from(torom, a => a.reverse()).reverse());
        for (const [key, value] of revmap.entries()) {
            if (value <= num) {
                return value;
            }
        }
        return -1;
    }

}



console.log(RomanNumerals.toRoman(1000), 'M')
console.log(RomanNumerals.toRoman(999), "CMXCIX")
console.log(RomanNumerals.toRoman(4), 'IV')
console.log(RomanNumerals.toRoman(1), 'I')
console.log(RomanNumerals.toRoman(1991), 'MCMXCI')
console.log(RomanNumerals.toRoman(2006), 'MMVI')
console.log(RomanNumerals.toRoman(2020), 'MMXX')

console.log(RomanNumerals.fromRoman('XXI'), 21)
console.log(RomanNumerals.fromRoman('I'), 1)
console.log(RomanNumerals.fromRoman('III'), 3)
console.log(RomanNumerals.fromRoman('IV'), 4)
console.log(RomanNumerals.fromRoman('MMVII'), 2007)
console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669)