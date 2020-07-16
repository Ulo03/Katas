// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    var res = [];
    str.split(" ").map(e => {
        if (e.match(/\w/g)) {
            var first = e.charAt(0);
            res.push(e.slice(1) + first + "ay");
        } else {
            res.push(e);
        }
    });
    return res.join(" ");
}

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')