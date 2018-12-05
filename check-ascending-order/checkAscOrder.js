module.exports = function checkAscOrder(numArray) {
  // write your code in here
  var ho =  numArray;
for(var i=0; i<ho.length;i++){
  // if(ho[i] < ho[i-1]){if(ho[i+1] < ho[i]){
  //   return(false);
  // }
    if(ho[i] < ho[i+1]){
      return(true)
    }
    if(ho[i]> ho[i+1]){
      return(false)
    }
  
  
  
  
  }
  
  

}

  
  
  
  

 
  





