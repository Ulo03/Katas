// https://www.codewars.com/kata/51fda2d95d6efda45e00004e

const accvals = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(x) {
    var dif =
      this.rank < 0 && x > 0 ? (this.rank - x + 1) * -1 : (this.rank - x) * -1;
    if (accvals.includes(x) && dif > 0) {
      this.progress += 10 * dif * dif;
    } else if (accvals.includes(x) && dif == 0) {
      this.progress += 3;
    } else if (accvals.includes(x) && dif == -1) {
      this.progress += 1;
    } else if (accvals.includes(x) && dif < -1) {
      this.progress += 1;
    } else {
      throw new Error('ERROR');
    }
    while (this.progress >= 100) {
      this.progress -= 100;
      this.rank + 1 == 0 ? (this.rank += 2) : (this.rank += 1);
    }
    if (this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
  }
}

module.exports.User = User;