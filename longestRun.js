// Write a function that, given a string, finds the longest run of characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for an empty string.
function longestRun (string){
  if(string === undefined || string === ''){
    return [0,0]
  }
    var longest = [];
    var count = 1
    var longestCount = 1;
    for (var i=0; i<string.length -1 ;i++){
        if (string[i] === string[i+1]){
            count++;
        } else {
            if (count > longestCount){
            longestCount = count;  
            longest[0] = string[i-1]
            }
            count = 1;
        }
    }
    if (count > longestCount){
        longestCount = count
    }
    var letter = string.indexOf(longest[0])
    if (letter < 0 && letter+longestCount-1 < 0){
      return [0,0]
    }
    return [letter, letter+longestCount-1];
    
}