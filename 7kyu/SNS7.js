// https://www.codewars.com/kata/5a662a02e626c54e87000123

const extraPerfect = (n) => {
  var res = [];
  for (let i=0; i <= n; i++) {
    if (i % 2 != 0) {
      res.push(i);
    }
  }
  return res;
}

extraPerfect(3).toString(); //?.$==[1,3].toString()