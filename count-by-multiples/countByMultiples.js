module.exports = function countByMultiples(length, x) {
  // write your code in here
  // console.log(length)
  // console.log(x)
  var add = 0;
  var arr = [];
  for(var i=0;i<length;i++){
     add += x;
     arr.push(add);
    
  }
  return arr;

}