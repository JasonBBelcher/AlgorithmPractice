function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var string = str.split(' ');  // turn arg into indexed array

  
  if(string.length > 1){       // if it is a sentence
    return string.pop() === target; // pops the last indexed word off array and compares it to target 
  }else{
    return  str.substr(-1) === target;  //get last letter of str and compare to target
  }

}