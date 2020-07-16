// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
    var scores = new Map();
    var score = 1;
    var history = [];
    for (let i = 97; i <= 122; i++) {
        scores.set(String.fromCharCode(i), score);
        score++;
    }
    x.split(' ').map(e => {
        score = 0;
        e.split('').map(l => {
            score += scores.get(l);
        });
        history.push(score);
    });
    const max = indexOfMax(history);
    return x.split(' ')[max];
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

console.log(high('man i need a taxi up to ubud') == 'taxi');
console.log(high('what time are we climbing up the volcano') == 'volcano'); 
console.log(high('take me to semynak') == 'semynak');  