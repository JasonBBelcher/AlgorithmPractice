//Truncate String at a Given Length
// instructions 
/* 
Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) 
as arguments and returns the truncated string at the given length.

*/

function truncate(string, length) {
    var truncated = string.slice(0, length);
    var partOfWord = truncated.charAt(truncated.length - 1);

    if (partOfWord.match(/[a-z]/) && !partOfWord.match(/m/)) {
        var arr = truncated.split(' ');
        arr.pop();
        return truncated = arr.join(' ');
    }
    return truncated;
}

// more elegant solution by - rob-now

function truncate(string, length) {
    const arr = string.split(' ');
    const sliced = string.slice(0, length).split(' ');
    return sliced.filter(
        (slice, index) =>
        slice === arr[index]
    ).join(' ');
}