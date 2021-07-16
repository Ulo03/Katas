// https://www.codewars.com/kata/587731fda577b3d1b0001196

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
//All words must have their first letter capitalized without spaces.

// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  const text = this.valueOf(0);
  let words = text.split(" ");
  let res = "";
  words = words.filter((str) => {
    return /\S/.test(str);
  });
  if (text == "") {
    return "";
  }
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    res += words[i];
  }
  return res;
}