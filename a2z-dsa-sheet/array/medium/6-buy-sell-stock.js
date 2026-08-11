// 121 . Buy and Sell Stock

function maxProfit(prices) {
  let min = prices[0],
    max = 0;
  index = 0;

  for (let i = 0; i < prices.length; i++)
    if (min > prices[i]) {
      min = prices[i];
      index = prices.indexOf(min);
    }

  for (let i = index; i < prices.length; i++) {
    if (max < prices[i]) {
      max = prices[i];
      var profit = max - min;
    }
  }

  return profit;
}

function maxProfit(prices) {
  let min_price = prices[0],
    profit = 0,
    max_profit = 0;

  for (let i = 0; i < prices.length; i++) {
    min_price = Math.min(min_price, prices[i]);
    profit = prices[i] - min_price;
    max_profit = Math.max(max_profit, profit);
  }

  return max_profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output 0
console.log(maxProfit([2, 4, 1])); // Output 2
