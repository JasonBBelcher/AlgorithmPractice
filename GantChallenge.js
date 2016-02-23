  // Gant's Challenge:  Had to take a list of integers, comma-delimited in a string, remove the 1's and 5's, sort it, and output it as a comma-delimited string again.

// This doesn't work for anything but single digits.  
  var stringOfNums = "3,6,4,9,7,8,0,68,45,32,67,1,1,4,3,5,6,9,5,55,43"
  var newArr = stringOfNums.split(",");
  var newArr2 = [];
  var str = "";
  for(var i= 0; i < newArr.length; i++){
  		if(newArr[i].indexOf('5') !== -1){
  			newArr2.push(newArr[i]);

  		} 

  		if (newArr[i].indexOf('1') !== -1){
  			newArr2.push(newArr[i]);
  		} 

  }
  		str += newArr2.join(' ');
 
 console.log(newArr2);
 console.log(str);


// the regex below matchs all fives and ones whether they are single or more digit nums

var stringOfNums = "3,6,4,9,7,8,0,68,45,32,67,1,1,4,3,5,6,9,5,55,43"


var foundFives = stringOfNums.match(/5/g);
var foundOnes = stringOfNums.match(/1/g);

var results = foundFives.concat(foundOnes);
results = results.join(',');

console.log(results);
var countFives = 0; 
var countOnes = 0;
for(var i = 0; i < foundFives.length; i++){
	if(foundOnes[i] !== -1)
		countFives += 1; 
}

for(var i = 0; i < foundOnes.length; i++){
	if(foundOnes[i] !== -1)
		countOnes += 1; 
}

console.log("There where " + countFives + " occurrences of  fives. ", "There where " + countOnes + " occurrences of  ones. ");


  