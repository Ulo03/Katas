// https://www.codewars.com/kata/5a55f04be6be383a50000187

const specialNumber = (n) => {
  return (n.toString().split("").every((e) => { return (e>= 0 && e <= 5)})) ? "Special!!" : "NOT!!";
}

specialNumber(2); //?.$=="Special!!"    
specialNumber(3); //?.$=="Special!!"    
specialNumber(6); //?.$=="NOT!!"        
specialNumber(9); //?.$=="NOT!!"        
specialNumber(11); //?.$=="Special!!"   
specialNumber(55); //?.$=="Special!!"   
specialNumber(26); //?.$=="NOT!!"       
specialNumber(92); //?.$=="NOT!!"       
specialNumber(25432); //?.$=="Special!!"
specialNumber(2783); //?.$=="NOT!!"     