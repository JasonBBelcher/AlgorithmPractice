function mutation(arr) {
  //we ignore case	
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  //we loop through str2 letters and look
  //if the letters are present in str1 (indexOf)
  //When we find a match we accumulate the value in
  //accum. There will be cases where a letter can be
  //matched twice because it can appear twice in str2
  for(var i=0, accum=0; i < str2.length; i++){
    if(str1.indexOf(str2[i]) !==-1)
       accum++;
  }
  //accum must contain equal to the length of str2
  //Or it can be greather.
  return accum >= str2.length; 
}

mutation(['Mary', 'Aarmy']);
    //paired with felixcriv