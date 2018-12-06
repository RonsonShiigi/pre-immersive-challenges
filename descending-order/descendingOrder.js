module.exports = function descendingOrder(number) {
  // write code in here

if(Number.isInteger(number)){
  // console.log(number);
  var arr = (""+number).split("");
  
  var newArr =  arr.sort(function(a, b){return b-a});
  // console.log(newArr);
  var newStr = newArr.join();
  // console.log(newStr)
 var newNum = newStr.replace(/,/g,"");
 return newNum
 
  

 

}else{
  return ('not a number!')
}

}

  