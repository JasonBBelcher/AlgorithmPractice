function iqTest(numbers){
  // input is a string of nums
  // split them either on space or comma
  var strNums = numbers.split(/[ ,]+/);
  var nums = [];
  // rebuild strNums into an array of numbers
  strNums.forEach(function(str){
    nums.push(parseInt(str));
  });

// keep track of how many evens or odds
// to make determine which index to return
  var evens = [];
  var odds = [];
  var evenIndex = 0;
  var oddIndex = 0;
  for(var i = 0; i < nums.length; i++){
// perform modulo comparison to determine odds or evens
    if(nums[i] % 2 !== 0){
        odds.push(nums[i]);
        oddIndex = nums.indexOf(nums[i]) + 1;

    } else if(nums[i] % 2 === 0) {
      evens.push(nums[i]);
      evenIndex = nums.indexOf(nums[i]) + 1;

      }

    }

// final comparison to return correct index
    if(evens.length > odds.length){
      return oddIndex;
    } else if(evens.length < odds.length) {
      return evenIndex;
    }

}
