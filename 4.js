function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indexO = i;
      break;
    }
  }

  if (indexO === -1) {
    return 0
  };

  let minDistance = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      let distance = i - indexO;
      if (distance < 0) {
        distance *= -1;
      }

      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }

  if (minDistance === Infinity) {
    minDistance = 0;
  }

  return minDistance;
}

console.log(targetTerdekat([" ", "", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

module.exports = targetTerdekat;
