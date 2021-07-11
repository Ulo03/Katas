// https://www.codewars.com/kata/58841cb52a077503c4000015

const circleOfNumbers = (n, firstNumber) => {
    if (n < 4 || firstNumber < 0 || firstNumber > n-1) return 0;
    let diff = n/2;
    if ((firstNumber + diff) > n-1) {
        let full = (n-1)-firstNumber;
        return diff-full-1;
    } else return (firstNumber + diff);
}

module.exports = {circleOfNumbers};