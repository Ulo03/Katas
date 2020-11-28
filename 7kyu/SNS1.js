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

balancedNum(7);   //?.$=="Balanced"     
balancedNum(959); //?.$=="Balanced"     
balancedNum(13);  //?.$=="Balanced"     
balancedNum(432); //?.$=="Not Balanced" 
balancedNum(424); //?.$=="Balanced"     

balancedNum(1024);    //?.$=="Not Balanced" 
balancedNum(66545);   //?.$=="Not Balanced" 
balancedNum(295591);  //?.$=="Not Balanced" 
balancedNum(1230987); //?.$=="Not Balanced" 
balancedNum(56239814);//?.$=="Balanced"     