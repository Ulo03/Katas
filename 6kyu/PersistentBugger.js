// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

const persistence = (n) => {
  if (n.toString().length <= 1) return 0;
  let c = 0;
  while (n.toString().length > 1) {
    n = n.toString().split("").map(e => +e).reduce((a,b) => a*b);
    c++;
  }
  return c;
}

persistence(39); //?.$==3
persistence(4); //?.$==0
persistence(25); //?.$==2
persistence(999); //?.$==4