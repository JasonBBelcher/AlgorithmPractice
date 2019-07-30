
// Doesn't pass tests with non alphanum chars   ????
//  How do I write the regex to include escaped chars???
function titleCase(str) {
   
   str = str.toLowerCase();
    return str.replace(/\b[a-z]/g, function(f){
        return f.toUpperCase()    
    });
}

function titleCase(str) {
    str = str.toLowerCase();  // make entire string lowerCase 
    var arr = str.split(' '); // turn each word into into arr
    // Capitalize first 
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]
            .charAt(0)   // get the first char of arr
            .toUpperCase() +   // turn it to UpperCase
            arr[i].substr(1);  // spit out rest of word as is
    }
    // convert back to string with spaces between words
    str = arr.join(' ');  
    return str;
}

// I originally got very stuck half way through because I didn't 
// realize that you can do arr[i].charAt(0) before converting back
// to a string.  I was clued in by Den McHenry of FCC after my 
// attempts to write in code what I already knew in pseudo code
// failed.   