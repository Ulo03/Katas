// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
//All words must have their first letter capitalized without spaces.

// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    const text = this.valueOf(0);
    var words = text.split(" ");
    var res = "";
    words = words.filter((str) => { return /\S/.test(str); });
    if (text == "") { return ""; }
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        res += words[i];
    }
    return res;
}

console.log("test case".camelCase() == "TestCase");
console.log("camel case method".camelCase() == "CamelCaseMethod");
console.log("say hello ".camelCase() == "SayHello");
console.log(" camel case word".camelCase() == "CamelCaseWord");
console.log("".camelCase() == "");