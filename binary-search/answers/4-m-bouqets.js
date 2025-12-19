// 1482. Minimum Number of Days to Make m Bouquets

var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  const canMakeBouquets = (day) => {
    let bouquets = 0;
    let flowers = 0;

    for (let bloom of bloomDay) {
      if (bloom <= day) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0;
        }
      } else {
        flowers = 0;
      }
    }

    return bouquets >= m;
  };

  let left = Math.min(...bloomDay);
  let right = Math.max(...bloomDay);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canMakeBouquets(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 2));
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
