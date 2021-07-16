// https://www.codewars.com/kata/581bb3c1c221fb8e790001ef

const selectSubarray = (arr) => {
  var res = {}, sum = arr.reduce((a, b) => a + b), prod = arr.reduce((a, b) => a * b), q = [];
  for (let i = 0; i < arr.length; i++) {
    res[`${i},${arr[i]}`] = [sum - arr[i], prod / arr[i], Math.abs((prod / arr[i]) / (sum - arr[i]))];
    q.push(Math.abs((prod / arr[i]) / (sum - arr[i])));
  }
  let min = Math.min.apply(Math, q);
  return Object.keys(res).find(key => res[key][2] == min).split(",").map(e => +e);
}

selectSubarray([1, 23, 2, -8, 5]); //?.$.toString() == "3,-8"
selectSubarray([1, 3, 23, 4, 2, -8, 5, 18]) //?.$.toString() == "2,23"