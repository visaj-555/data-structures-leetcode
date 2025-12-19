// 875. Koko Eating Bananas

var minEatingSpeed = function (piles, h) {
  const canFinish = (k) => {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours <= h;
  };

  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canFinish(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
