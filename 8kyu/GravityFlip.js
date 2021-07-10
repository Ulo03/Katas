// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => {
  return d == 'R'
    ? a.sort((a, b) => {
        return a - b;
      })
    : a.sort((a, b) => {
        return b - a;
      });
};

module.exports = { flip };