/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function placeValue(num) {
    numlength = num.toString().split("").length;
    return numlength;
}

function convertNumToArray(num) {
    return num = num.toString().split("").map(Number);
}

function convertToRoman(num) {
    var onesVal, tensVal, hundredsVal;
    var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "LXXX", "XC"];
    var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["M", "MM", "MMM"];
    if (placeValue(num) === 1) {
        return ones[num - 1];
    }
    else if (placeValue(num) === 2) {
        tensVal = tens[convertNumToArray(num)[0] - 1];
        if (convertNumToArray(num)[1] !== 0 && convertNumToArray(num)[0] !== 9) {
            return tensVal + ones[convertNumToArray(num)[1] - 1];
        }
        else if (convertNumToArray(num)[0] === 9) {
            tensVal = tens[convertNumToArray(num)[0]];
            console.log(tensVal);
            return tensVal + ones[convertNumToArray(num)[1] - 1];
        }
        else {
            return tensVal;
        }
    }
    else if (placeValue(num) === 3) {
        hundredsVal = hundreds[convertNumToArray(num)[0] - 1];
        tensVal = tens[convertNumToArray(num)[1] - 1];
        onesVal = ones[convertNumToArray(num)[2] - 1];
        if (convertNumToArray(num)[1] !== 0 && convertNumToArray(num)[2] !== 0 && convertNumToArray(num)[1] !== 9) {
            return hundredsVal + tensVal + onesVal;
        }
        else if (convertNumToArray(num)[1] === 0 && convertNumToArray(num)[2] !== 0) {
            return hundredsVal + onesVal;
        }
        else if (convertNumToArray(num)[1] === 9) {
            tensVal = tens[convertNumToArray(num)[1]];
            console.log(tensVal);
            return hundredsVal + tensVal + ones[convertNumToArray(num)[2] - 1];
        }
        else {
            return hundredsVal;
        }
    }
    else if (placeValue(num) === 4) {
        thousandsVal = thousands[convertNumToArray(num)[0] - 1];
        hundredsVal = hundreds[convertNumToArray(num)[1] - 1];
        tensVal = tens[convertNumToArray(num)[2] - 1];
        onesVal = ones[convertNumToArray(num)[3] - 1];
        if (convertNumToArray(num)[1] !== 0 && convertNumToArray(num)[2] !== 0 && convertNumToArray(num)[3] !== 0 && convertNumToArray(num)[1] !== 9 && convertNumToArray(num)[2] !== 9) {
            return thousandsVal + hundredsVal + tensVal + onesVal;
        }
        else if (convertNumToArray(num)[1] === 0 && convertNumToArray(num)[2] === 0 && convertNumToArray(num)[3] !== 0) {
            return thousandsVal + onesVal;
        }
        else if (convertNumToArray(num)[1] === 9 && convertNumToArray(num)[2] === 9 && convertNumToArray(num)[3] !== 0) {
            hundredsVal = hundreds[convertNumToArray(num)[1] - 1];
            tensVal = tens[convertNumToArray(num)[2]];
            return thousandsVal + hundredsVal + tensVal + ones[convertNumToArray(num)[3] - 1];
        }
        else if (convertNumToArray(num)[1] !== 9 && convertNumToArray(num)[2] === 9) {
            tensVal = tens[convertNumToArray(num)[2]];
            return thousandsVal + hundredsVal + tensVal + ones[convertNumToArray(num)[3] - 1];
        }
        else if (convertNumToArray(num)[1] === 9 && convertNumToArray(num)[2] !== 9) {
            hundredsVal = hundreds[convertNumToArray[1] - 1];
            return thousandsVal + hundredsVal + tensVal + ones[convertNumToArray(num)[3] - 1];
        }
        else if (convertNumToArray(num)[1] === 0 && convertNumToArray(num)[2] !== 0 && convertNumToArray(num)[3] !== 0 && convertNumToArray(num)[2] !== 9) {
            return thousandsVal + tensVal + ones[convertNumToArray(num)[3] - 1];
        }
        else {
            return thousandsVal;
        }
    }
}
convertToRoman(30);