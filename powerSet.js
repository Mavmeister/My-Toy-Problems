function powerSet (string) {
  var sorted = string.split('').sort();
  
  results =[' '];
  removeDupes = [];
  
  for (var i = 0; i < sorted.length; i++){
      if(sorted.indexOf(sorted[i], i+1) < 0){
          removeDupes.push(sorted[i]);
      }
  }
  for (i = 0; i < removeDupes.length; i++){
      var l = results.length
      for(var k = 0; k < l; k++ ){
          results.push(results[k] + removeDupes[i])
      }
  }
  return results
}


// console.log(powerSet("devil"))