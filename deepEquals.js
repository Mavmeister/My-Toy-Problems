/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */


var deepEquals = function(apple, orange){
var equal = true;
    if (typeof apple !== 'object' && typeof orange !== 'object'){
        return apple === orange;
    }
  if (Object.keys(apple).length !== Object.keys(orange).length){
    equal = false;
  }
//   console.log(Object.keys(apple).length)
  for( var key in apple){
    equal = equal && deepEquals(apple[key], orange[key])
  }
return equal;
};

console.log( deepEquals({a:1, b: {c:3}} , {a:1, b: {c:3}}) );
