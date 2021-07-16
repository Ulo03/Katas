let reverse;
// Reverse Array with Code <= 30 Bytes

reverse = a => [...a].map(a.pop, a) //30 Bytes

module.exports = {reverse};