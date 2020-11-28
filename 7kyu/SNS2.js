// https://www.codewars.com/kata/5a4d303f880385399b000001

const strong = (n) => {
  return (n.factorial() == n) ? "STRONG!!!!" : "Not Strong !!";
}

Number.prototype.factorial = function() {
  var digits = this.valueOf().toString().split("").map(e => +e), sum=0;
  for(let i of digits) {
    let fac=1;
    for (let j=1; j <= i; j++) {
      fac *= j;
    }
    sum += fac;
  }
  return sum;
}

strong(1); //?.$=="STRONG!!!!"     
strong(2); //?.$=="STRONG!!!!"     
strong(145); //?.$=="STRONG!!!!"   
strong(7); //?.$=="Not Strong !!"  
strong(93); //?.$=="Not Strong !!" 
strong(185); //?.$=="Not Strong !!"