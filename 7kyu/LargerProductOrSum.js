//https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02
// Description
// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest 
//numbers of the array and the product of the n smallest numbers of the array, and compare the two.
// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"
// Note The array will never be empty and n will always be smaller than the length of the array.
// Example
//   sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"
// Explanation
// The sum of the 3 highest numbers is 41 + 36 + 20 = 97
// The product of the lowest 3 numbers is 8 x 9 x 10 = 720
// The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

function sumOrProduct(array, n) {
    var min = array.sort((a,b)=>{return a-b;}).slice(0,n), max = array.sort((a,b)=>{return b-a;}).slice(0,n);
    var x = 0, y = 1;
    const sum = max.map(e => {return x+=e})[max.length-1], prod = min.map(e => {return y*=e})[min.length-1];
    return (sum == prod) ? "same" : (sum > prod) ? "sum" : "product";
}