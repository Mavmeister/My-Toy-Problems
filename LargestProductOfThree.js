/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */



var largestProductOfThree = function(array) {
    if (array.length <= 3) {
        var sum = 1;
        for (var i = 0; i < array.length; i++) {
            sum *= array[i]
        }
        return sum;
    }
    var sorted = array.sort(function(a, b) {
        return a - b;
    });
    sum = 1;
    var three = sorted.slice(sorted.length - 3)
    for (i = 0; i < three.length; i++) {
        sum *= three[i]
    }
    return sum;
};

console.log(largestProductOfThree([2, 3, 7]));
