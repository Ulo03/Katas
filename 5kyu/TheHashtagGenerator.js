// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    return (str.match(/\w/g) && str.camelCase().length < 140) ?  "#" + str.camelCase() : false
}

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

console.log(generateHashtag("") == false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)) == false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)) == "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)), false, "Too long")