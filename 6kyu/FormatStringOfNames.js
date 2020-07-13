// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
    switch(names.length) {
        case 0:
            return '';
            break;
        case 1:
            return names[0].name;
            break;
        case 2:
            return `${names[0].name} & ${names[1].name}`;
            break;
        default:
            var len = names.length;
            var res = names[0].name;
            for (let i = 1; i < len-1; i++) {
                res += `, ${names[i].name}`;
            }
            res += ` & ${names[names.length-1].name}`;
            return res;
            break;
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]) == 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]) == 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]) == 'Bart & Lisa', 
"Must work with two names")
console.log(list([{name: 'Bart'}]) == 'Bart', "Wrong output for a single name")
console.log(list([]) == '', "Must work with no names")