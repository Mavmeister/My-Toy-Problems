// Iterative Fib
// Given a number n, write an iterative (not recursive) solution to find the nth number in the fibonacci sequence.

function iterativeFib (n) {
// // var fib = [0,1];
// // // next number is equal to sum of previous 2 numbers
// //     if (n === 0){
// //     return 0;
// //     }
// //     if (n ===1){
// //         return 1;
// //     }
// //     for (var i = 2; i <= n; i++){
// //         fib[i] = ((fib[i-2] + fib[i-1]))
// //     }
// //     return fib[fib.length-1]
// // }

var prev = 1
var prevprev = 0
var current;

if (n === 0){
    return 0;
}
    for (var i = 1; i < n; i++){
        current = prev;
        prev = prevprev + prev;
        prevprev = current;
    }
    return prev
}
