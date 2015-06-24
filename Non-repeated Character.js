// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'. 

// Parameters: 
// string (required) - a string of characters.

// Examples
// Input Output
// string:
// "ABCDBIRDUP"  "A"
// string:
// "XXXXXXX" "sorry"

function firstNonRepeatedCharacter (string) {
var repeated = {};
var noRepeat = true;
    for (var i = 0; i < string.length; i++){
        if (repeated.hasOwnProperty(string.charAt(i))){
            repeated[string.charAt(i)] += 1;
        } else {
        repeated[string.charAt(i)] = 1;    
        }
    }
    
    for (var prop in repeated){
        if (repeated[prop] === 1){
            console.log(prop)
            noRepeat = false;
            return prop
        } else (noRepeat = true)
     }
    console.log(noRepeat)
    if (noRepeat === true){ 
        return "sorry" 
    }
}
    