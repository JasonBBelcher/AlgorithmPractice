// sock merchant

function sockMerchant(n, ar) {
  const map = {};
  const colorMap = {};

  ar.forEach(color => {
    map[color] = [];
    colorMap[color] = color;
  });

  ar.forEach(color => {
    if (colorMap[color] == color) {
      map[color].push(color);
    }
  });

  ar.forEach(color => {
    const length = map[color].length;

    if (Math.floor(length / 2)) {
      map[color] = Math.floor(length / 2);
    } else if (Math.floor(length / 2) === 0) {
      map[color] = 0;
    }
  });
  let total;

  const arrTotal = Object.values(map);
  total = arrTotal.reduce((acc, curr) => acc + curr);

  return total;
}

sockMerchant(8, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
