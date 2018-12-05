module.exports = function descendingOrder(number) {
  // write code in here
 var arr = [];
if(Number.isInteger(number)){
  // console.log('hi');
  //TYPE IN DESCENDING ORDER
  var long = Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
  
  for(var i=0; i<long.length; i++){
  
  }
console.log(long);

}else{
  return ('not a number!')
}

}

  