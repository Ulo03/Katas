// Part of Series 1/3
// This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

// In this kata you have to write a simple Morse code decoder. 
//While the Morse code is now mostly superseded by voice and digital data communication channels, 
//it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". 
//For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
//The Morse code is case-insensitive, traditionally capital letters are used. 
//When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. 
//For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// For example:
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

decodeMorse = function(morseCode){
    var morse = {  
        "-----":"0",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        ".-":"a",
        "-...":"b",
        "-.-.":"c",
        "-..":"d",
        ".":"e",
        "..-.":"f",
        "--.":"g",
        "....":"h",
        "..":"i",
        ".---":"j",
        "-.-":"k",
        ".-..":"l",
        "--":"m",
        "-.":"n",
        "---":"o",
        ".--.":"p",
        "--.-":"q",
        ".-.":"r",
        "...":"s",
        "-":"t",
        "..-":"u",
        "...-":"v",
        ".--":"w",
        "-..-":"x",
        "-.--":"y",
        "--..":"z",
        "/":" ",
        "-·-·--":"!",
        "·-·-·-":".",
        "--··--":",",
        "":" "
     };
    return morseCode.split(" ").map(e => {
        return morse[e]; 
    }).join("").toUpperCase().trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')