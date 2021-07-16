// https://www.codewars.com/kata/5a58d889880385c2f40000aa

const automorphic = (n) => {
  return ((n ** 2).toString()).endsWith(n.toString()) ? "Automorphic" : "Not!!";
}

module.exports = {automorphic};