var bind = function(func, context){
  var args = Array.prototype.slice.call(arguments, 2)
  if(context === undefined || context === null){
    context = this;
  }
  return function(){
    var moreArgs = Array.prototype.slice.call(arguments)
    var allArgs = args.concat(moreArgs)
  return func.apply(context, allArgs)
  }
};  

Function.prototype.bind = function(context) {
  var that = this
  var args = Array.prototype.slice.call(arguments,1)
  return function(){
    var moreArgs = Array.prototype.slice.call(arguments)
    var allArgs = args.concat(moreArgs)
    return that.apply(context, allArgs)
    }
};
