Array.prototype.sameStructureAs = function (other) {
  var first = JSON.stringify(this).replace(/[0-9]/g, 'X');
  var second = JSON.stringify(other).toString().replace(/[0-9]/g, 'X');
  if (first == second) {
    return true;
  } else {
    return false;
  }
};