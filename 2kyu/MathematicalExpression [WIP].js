//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

const calc = (expression) => {
  var exp = expression.match(/(([0-9]*)||\+||\-||\*||\/||\(||\))?/g);
  exp = exp.filter((e) => {
    return e != '';
  });
  return exp;
};