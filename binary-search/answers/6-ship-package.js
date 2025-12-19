// 1011. Capacity To Ship Packages Within D Days

function shipWithinDays(weights, days) {
  function canShip(capacity) {
    let daysNeeded = 1;
    let currentLoad = 0;

    for (let weight of weights) {
      if (currentLoad + weight > capacity) {
        daysNeeded++;
        currentLoad = weight;
      } else {
        currentLoad += weight;
      }
    }

    return daysNeeded <= days;
  }

  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canShip(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
