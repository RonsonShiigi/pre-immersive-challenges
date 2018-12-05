module.exports = function cookieProblem(array) {
  // write your code in here
var max = Math.max.apply(null, array);
console.log(max);
var total= 0
for(var i=0; i<array.length;i++){
  
 total += (max-array[i]);
console.log(total);



}
return total;


  


}