// example If given 2 strings such as "cooperation"  and a part of it like 'rat', 'ion', 'per' or 'coop' 
//it will return true for all cases whether it starts with ends with or
// is in the middle of the word given as first parameter


function findMatchinWords(str1, str2) {
    if (str1.startsWith(str2)) {
        return true;
    } else if (str1.endsWith(str2)) {
        return true
    } else {
        var strOne = str1.split(str2);
        strOne.push('');
        strOne[2] = strOne[1];
        strOne[1] = str2;
        var strCombined = strOne.join('');
        if (strCombined === str1) {
            return true;
        }
        return false;
    }
}