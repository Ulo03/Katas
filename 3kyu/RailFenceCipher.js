// https://www.codewars.com/kata/58c5577d61aefcf3ff000081

// Create two functions to encode and then decode a string using the Rail Fence Cipher.
//This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".
//First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail.
//Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.
// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C
//     A       I       V       D       E       N
// The encoded string would be:
// WECRLTEERDSOEEFEAOCAIVDEN

// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.
// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.
// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.
// Note that the example above excludes the punctuation and spaces just for simplicity.
//There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

function encodeRailFenceCipher(string, numRails) {
  if (string == '' || numRails < 2) return '';
  var it = 0;
  var mode = 'in';
  var rails = [];
  for (let i = 0; i < numRails; i++) {
    rails.push([]);
  }
  string.split('').map((e, idx) => {
    rails[it].push(e);
    if (it > numRails - 2) {
      mode = 'de';
    } else if (it == 0) {
      mode = 'in';
    }
    if (mode == 'in' && it < numRails - 1) {
      it++;
    } else if (it > 0 && mode == 'de') {
      it--;
    }
  });
  rails = rails.map((e) => e.join(''));
  return rails.join('');
}

function decodeRailFenceCipher(string, numRails) {
  if (string == '' || numRails == 0) return '';
  let rails = [];
  for (let i = 0; i < numRails; i++) {
    rails.push([]);
  }
  let rail = 0;
  let change = 1;
  string.split('').forEach((char) => {
    rails[rail].push(char);
    rail += change;
    if (rail === numRails - 1 || rail === 0) {
      change = -change;
    }
  });
  const rFence = [];
  for (let i = 0; i < numRails; i++) rFence.push([]);
  i = 0;
  let s = string.split('');
  for (res of rails) {
    for (let j = 0; j < res.length; j++) rFence[i].push(s.shift());
    i++;
  }
  rail = 0;
  change = 1;
  var res = '';
  for (var i = 0; i < string.length; i++) {
    res += rFence[rail].shift();
    rail += change;
    if (rail == numRails - 1 || rail == 0) {
      change = -change;
    }
  }
  return res;
}

module.exports = { decodeRailFenceCipher, encodeRailFenceCipher };