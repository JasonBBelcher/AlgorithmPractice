function spinalCase(str) {
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');  // what is this --> '$1 $2' references to the matches wrapped in parenthesis
  console.log(str);
  str = str.split(/[\s,_]+/).join('-').toLowerCase(); // split into array at spaces and underscores then join back into a string then convert to lowercase. 
  console.log(str);
  return str; 
   
   
   
    
  
  
}

spinalCase('The_Andy_Griffith_Show');