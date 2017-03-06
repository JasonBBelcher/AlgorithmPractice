/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function convertStringTOCharCode(str) {
    'use strict';
    var charCodes, strArr, i;
    charCodes = [];
    strArr = str.split("");
    for (i = 0; i < strArr.length; i += 1) {
        charCodes.push(str.codePointAt(i));
    }
    return charCodes;
}

function decodeCipher(arr) {
    var decodedArr = [];
    arr.forEach(function (charCode) {
        if (String.fromCharCode(charCode) <= "M" && String.fromCharCode(charCode) > "@") {
            decodedArr.push(charCode + 13);
        }
        else if (String.fromCharCode(charCode) > "M" && String.fromCharCode(charCode) < "[") {
            decodedArr.push(charCode - 13);
        }
        else {
            decodedArr.push(charCode);
        }
    });
    return convertCharCodesToString(decodedArr);
}

function convertCharCodesToString(arr) {
    var str = "";
    arr.forEach(function (charCode) {
        console.log(charCode);
        if (charCode === 45) {
            str += " ";
        }
        else {
            str += String.fromCharCode(charCode);
        }
    });
    return str;
}

function rot13(str) { // LBH QVQ VG!
    return decodeCipher(convertStringTOCharCode(str));
}