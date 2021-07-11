// https://www.codewars.com/kata/5a4e3782880385ba68000018

const balancedNum = (num) => {
  var len=num.toString().length;
  if (len <= 2) return "Balanced";
  var  odd = (len % 2 == 0) ? true : false, p1 = [], p2=[];
  if (odd) {
    p1 = num.toString().substr(0,len/2-1).split("").map(e => +e);
    p2 = num.toString().substr(len/2+1).split("").map(e => +e);
    p1 = p1.map(e => +e); p2 = p2.map(e => +e);
    return (p1.reduce((a,b) => a+b) == p2.reduce((a,b) => a+b)) ? "Balanced" : "Not Balanced";
  } else {
    p1 = num.toString().substr(0, len/2).split("").map(e => +e);
    p2 = num.toString().substr(len/2+1).split("").map(e => +e);
    return (p1.reduce((a,b) => a+b) == p2.reduce((a,b) => a+b)) ? "Balanced" : "Not Balanced";
  }
}

module.exports = {balancedNum};