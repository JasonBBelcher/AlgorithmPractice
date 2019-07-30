var numstring = "1247 516 335 229 505 351 333 356 97 647 452 741 536 873 331 135 596 671 510 164 550 323 772 500 767 821 1107 747 1163 1279 1006 1109 495 40"


function convertToNum(nums){

    var myArray = nums.split(" ");
    var total = 0;
     
    for( var i = 0; i < myArray.length; i++){
         var n = Number(myArray[i]);
         total += n;  
         
        
        
    }
    return total;
}

console.log(convertToNum(numstring));


