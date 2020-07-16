// Write a function/method (depending on the language) to return true/True 
// when its argument is an array that has the same nesting structures 
// and same corresponding length of nested arrays as the first array.

Array.prototype.sameStructureAs = function (other) {
    var first = JSON.stringify(this).replace(/[0-9]/g, "X");
    var second = JSON.stringify(other).toString().replace(/[0-9]/g, "X");
    if (first == second) {
        return true;
    } else {
        return false;
    }
};

console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ) == true);
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ) == false);