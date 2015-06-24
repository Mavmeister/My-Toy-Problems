var bubbleSort = function(array, count) {
    var l = array.length;
    for (var j = 0; j < l; j++){
        for (var i = 0; i < l; i++){
            var temp;
            if ( array[i] > array[i+1]){
                temp = array[i];
                array[i] = array[i+1]
                array[i+1] = temp;
            }
        }
    }
    return array;
};

// another method is to create one for-loop, have a while (true) above it,
//then have a swap function, If swapped, mark a flag for 'swapped'. As long as swapped is true,
// continue running through the loop and swapping. if (!swapped){break;}

