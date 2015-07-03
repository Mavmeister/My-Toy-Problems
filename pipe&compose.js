var compose = function(){
    var args = Array.prototype.slice.call(arguments);
    return function(innerArg){
        var result = innerArg
        for (var i = args.length -1; i >= 0; i--){
          result = args[i](result)
         }
    return result
    }
  
};


var pipe = function(){
    var args = Array.prototype.slice.call(arguments);
    return function(innerArg){
        var result = innerArg;
        for (var i = 0; i<args.length; i++){
            result = args[i](result)
        }
    return result
    }
};

