// Is Subet Of
// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(array){
  var subSet = {};
  var target = {};
  var result = true;
  for (var i = 0; i < this.length; i++) {
    subSet[this[i]] = 1;
  }

  for (var i = 0; i < array.length; i++) {
    target[array[i]] = 1;
  }

  for (var prop in subSet) {
    if (!target.hasOwnProperty(prop)) {
      result = false;
    }
  }
  return result;
};