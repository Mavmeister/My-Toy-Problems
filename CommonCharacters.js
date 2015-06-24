//  Common Characters
//  Write a function that accepts two strings as arguments, 
//  and returns only the characters that are common to both strings.
//  Your function should return the common characters in the same order
//  that they appear in the first argument. 
//  Ignore whitespace in your returned string. 

//  Example: commonCharacters('acexivou', 'aegihobu') 
//  Returns: 'aeiou'

commonCharacters = function(string1, string2){
  if (string1 === '' || string2 === ''){
    return '';
  }
var str1 = string1.split(/[\s,]+/).join('')
var str2 = string2.split(/[\s,]+/).join('')
var shared = {};
var result = [];

for (var i = 0; i < str1.length; i++){
    shared[str1[i]] = 1;
}
for (i = 0; i < str2.length; i++){
    shared[str2[i]] = shared[str2[i]] >= 1 ? 
    shared[str2[i]] + 1 : 1;
}
for (var key in shared){
    if (shared[key] > 1){
        result.push(key)
    }
}
result = result.join('');
result = result.toString();
return result;
};

// Attempt at using Reduce
// var commonCharacters = fn(str1, str2) {
//   var common = intersection(objectify(str1), objectify(str2));

//   return str1.split('').reduce(fn(result, char) {
//       if (common[char]) {
//           result += char;
//       }
//       return result
//   }, '')

//   return intersect(str1, str2)
//   var intersect = fn(set1, set2) {
//       return Object.keys(set1).reduce(
//           function(out, val) {
//               if (val in set2) {
//                   out[val] = true;
//                   return out;
//               }, {});
//       }
//       var objectify = fn(str) {
//           return str.split('').reduce(fn(obj, char) {
//               if (char.match(/[a-z]/i)) {
//                   obj[char] = true;
//               }
//               return obj;
//           }, {});
//       }

//   }
