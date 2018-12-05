module.exports = function cookieProblem(array) {
  // write your code in here
var max = Math.max.apply(null, array);
console.log(max);

for(var i=0; i<array.length;i++){
var extra = max-array[i];
console.log(extra);



}


  


}