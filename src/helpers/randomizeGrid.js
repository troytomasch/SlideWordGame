const isSolvable = (order) => {
  if (order.length === 0) {
    return false;
  }

  let inversions = 0;
  for (let i = 0; i < 15; i++) {
    if (order[i] === 14) {
      continue;
    }
    if (order[i] > i) {
      inversions++;
    }
  }

  if (inversions === 0) {
    return false;
  }

  if (inversions % 2 === 0) {
    return true;
  }

  return false;
};

const getRandomOrder = () => {
  let randomOrder = [];

  while (!isSolvable(randomOrder)) {
    randomOrder = [];
    for (let i = 0; i < 15; i++) {
      let random = Math.floor(Math.random() * 15);
      while (randomOrder.includes(random)) {
        random = Math.floor(Math.random() * 15);
      }
      randomOrder.push(random);
    }
  }

  return randomOrder;
};

const randomizeGrid = (grid) => {
  let randomOrder = getRandomOrder();

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

export { randomizeGrid };
