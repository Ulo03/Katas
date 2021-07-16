// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

const jumpingNumber = (n) => {
  var x = n.toString();
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] - x[i + 1] != 1 && x[i + 1] - x[i] != 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

module.exports = {jumpingNumber};