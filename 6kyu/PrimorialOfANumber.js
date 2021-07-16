// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

const numPrimorial = (n) => {
  var primes = [], x = 2;
  while (primes.length < n) {
    if (x.isPrime()) primes.push(x);
    x++;
  }
  return primes.reduce((a, b) => a * b); //?
}

Number.prototype.isPrime = function () {
  for (let i = 2; i < this.valueOf(); i++) {
    if (this.valueOf() % i == 0) {
      return false;
    }
  }
  return true;
}

numPrimorial(3); //?.$==30        
numPrimorial(4); //?.$==210       
numPrimorial(5); //?.$==2310      
numPrimorial(8); //?.$==9699690   
numPrimorial(9); //?.$==223092870 