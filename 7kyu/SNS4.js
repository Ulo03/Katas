// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed

const jumpingNumber = (n) => {
  var x = n.toString();
  for (let i=0; i<x.length-1; i++) {
    if(x[i]-x[i+1] != 1 && x[i+1]-x[i] != 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

jumpingNumber(1); //?.$=="Jumping!!"       
jumpingNumber(7); //?.$=="Jumping!!"       
jumpingNumber(9); //?.$=="Jumping!!"       
jumpingNumber(23); //?.$=="Jumping!!"      
jumpingNumber(32); //?.$=="Jumping!!"      
jumpingNumber(79); //?.$=="Not!!"          
jumpingNumber(98); //?.$=="Jumping!!"      
jumpingNumber(8987); //?.$=="Jumping!!"    
jumpingNumber(4343456); //?.$=="Jumping!!" 
jumpingNumber(98789876); //?.$=="Jumping!!"