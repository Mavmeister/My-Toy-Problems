// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play posibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  var poss = ["r", "p", "s"];
  var results = [];
  if (roundCount ===1){
        return poss;
  }
  if(roundCount === 0){
        return results;
  }
  roundCount = roundCount || 3;
  var recurse = function(currentArray){
       if (currentArray.length === roundCount){
           var str = currentArray.join("").toString();
           results.push(str);
           return
       }
       
       for (var i = 0; i < poss.length; i++){
           recurse(currentArray.concat(poss[i]))
       }
  }
   recurse([])
   return results;
}
