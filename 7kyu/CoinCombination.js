// https://www.codewars.com/kata/564d0490e96393fc5c000029

const coinCombo = (cents) => {
  let vals = [1, 5, 10, 25], res = [0, 0, 0, 0];
  while (cents > 0) {
    for (let i = 3; i >= 0; i--) {
      if (vals[i] <= cents) {
        res[i] += 1;
        cents -= vals[i];
        break;
      }
    }
  }
  return res;
}

module.exports = {coinCombo};