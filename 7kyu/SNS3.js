// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

// const disariumNumber = (n) => {
//   var nums = n.toString().split("").map(e => +e), sum=0;
//   for (let i=0; i < n.toString().length; i++) {
//     sum += nums[i]**(i+1);
//   }
//   return (sum == n) ? "Disarium !!" : "Not !!";
// }

const disariumNumber = (n) => {
  var sum = 0, nums = n.toString().split("").map((e, i) => {
    sum += (+e) ** (i + 1)
  });
  return (sum == n) ? "Disarium !!" : "Not !!";
}

module.exports = {disariumNumber};