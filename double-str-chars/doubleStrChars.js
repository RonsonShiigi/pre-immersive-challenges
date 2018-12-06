module.exports = function doubleStrChars(str) {
  var type = typeof str;
  if(type === 'string'){
    // console.log('boom')
    for(var i=0; i<str.length;i++){
    //  console.log(str.charAt(i));
    var double = str.charAt(i)+str.charAt(i);
    console.log(double)
    }
  }
  
  
  
  
  else{
    return 'not a string!'
  }
}