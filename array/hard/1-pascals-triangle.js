// 118. Pascal's Triangle

function pascalsTriangle(n) {
  let row = [1];

  for (let i = 0; i <= n; i++) {
    console.log(row.join(" "));
    row = generateNextRow(row);
  }
}

function generateNextRow(lastRow) {
  let nextRow = [];
  nextRow.push(1);
  for (let i = 0; i < lastRow.length - 1; i++) {
    nextRow.push(lastRow[i] + lastRow[i + 1]);
  }
  nextRow.push(1);
  return nextRow;
}

pascalsTriangle(5);
