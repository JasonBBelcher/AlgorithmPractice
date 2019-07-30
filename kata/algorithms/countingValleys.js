// Hackerrack challenge
// this only passes 4 test cases.  I need to come back to this and rethink my approach.

function countingValleys(s) {
  const sArr = s.split('');
  let steps = [];
  let valleys = [];
  let valleysCount = 0;

  for (let i = 0; i <= sArr.length; ) {
    if (sArr.slice(i - 2, i).join('') === 'DD') {
      i += 2;

      valleys.push('DD');
    } else if (sArr.slice(i - 2, i).join('') === 'UU') {
      i += 2;

      valleys.push('UU');
    } else {
      i += 1;
    }
  }

  for (let j = 0; j <= valleys.length; ) {
    if (
      valleys[j] !== valleys[j + 1] &&
      typeof valleys[j + 1] !== 'undefined'
    ) {
      valleysCount += 1;
      j += 2;
    } else {
      j += 1;
    }
  }

  return valleysCount;
}

console.log(countingValleys('DDUUUDDDDDDDUUUUUUUUUUDDDDDDDDD'));
