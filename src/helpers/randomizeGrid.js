const randomizeGrid = (grid) => {
  let randomOrder = [];
  for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * 15);
    while (randomOrder.includes(random)) {
      random = Math.floor(Math.random() * 15);
    }
    randomOrder.push(random);
  }

  let count = 0;
  let newGrid = [[], [], []];
  for (let i of randomOrder) {
    let row = 0;
    let col = 0;
    while (i > 4) {
      row++;
      i -= 5;
    }
    while (i > 0) {
      col++;
      i--;
    }
    if (count < 5) {
      newGrid[0].push(grid[row][col]);
    } else if (count < 10) {
      newGrid[1].push(grid[row][col]);
    } else {
      newGrid[2].push(grid[row][col]);
    }
    count++;
  }

  return newGrid;
};

let grid = [
  ["h", "a", "p", "p", "y"],
  ["h", "a", "p", "p", "y"],
  ["b", "d", "a", "y", "_"],
];

let newGrid = randomizeGrid(grid);

console.log(newGrid);

module.exports = {
  randomizeGrid,
};
