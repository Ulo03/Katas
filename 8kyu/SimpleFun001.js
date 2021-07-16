// https://www.codewars.com/kata/588417e576933b0ec9000045

const seatsInTheater = (nCols, nRows, col, row) => {
  if (nCols < 1 || nRows < 1 || col > nCols || row > nRows) return 0;
  return ((nCols - (col - 1)) * (nRows - row));
}

module.exports = {seatsInTheater};