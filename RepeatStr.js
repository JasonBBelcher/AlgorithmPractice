function repeat(str, num) {
 if(num < 1) return ''; 
  var string = '';
  for(i = 0; i < num; i++){
      string += str;
       
        
  }
  return string;
}

repeat('abc', 3);