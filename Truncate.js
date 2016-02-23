
// my solution 
function truncate(str, num) {
 
    if(str.length > num){
        str = str.slice(0,num);
        str = str.slice(0,-3);
        str += "..."

    }
    
    
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
// Tourn171 solution
function truncate2(str, num) {
  // Clear out that junk in your trunk
  var trunc = "";
  if(str.length <= num){
    return str;
  }
  else{
    for(var i=0; i<num-3; i++){
      trunc += str[i];
    }
  }
  return trunc+"...";
}

// callieelizabethsolution

function truncate3(str, num) {
    var ending = "...";
    
    if (str.length > num) {
        return str.slice(0, num - 3) + ending;
    }
    else {
        return str;
    }
}