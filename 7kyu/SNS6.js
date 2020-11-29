// https://www.codewars.com/kata/5a58d889880385c2f40000aa

const automorphic = (n) => {
  return ((n**2).toString()).endsWith(n.toString()) ? "Automorphic" : "Not!!";
}

automorphic(1); //?.$=="Automorphic"  
automorphic(3); //?.$=="Not!!"        
automorphic(6); //?.$=="Automorphic"  
automorphic(9); //?.$=="Not!!"        
automorphic(25); //?.$=="Automorphic" 
automorphic(53); //?.$=="Not!!"       
automorphic(76); //?.$=="Automorphic" 
automorphic(95); //?.$=="Not!!"       
automorphic(625); //?.$=="Automorphic"
automorphic(225); //?.$=="Not!!"      