module.exports = function descendingOrder(number) {
  // write code in here

if(Number.isInteger(number)){
  // console.log(number);
  var arr = (""+number).split("");
  // console.log(digits)
  var newArr =  arr.sort(function(a, b){return b-a});
  var string = newArr.toString();
  var number = parseInt(string);
  // console.log(newNum);
for(var i=0; i<newArr.length; i++){
  var st = newArr[i].toString();
  var newSt= st + st[i]
  console.log(newSt)

}
  

 

}else{
  return ('not a number!')
}

}

  