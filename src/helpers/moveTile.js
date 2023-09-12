const moveTile = (letter, grid, row, column) => {
  let blankRow = 0;
  let blankCol = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "_") {
        blankRow = i;
        blankCol = j;
        break;
      }
    }
  }

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (Math.abs(i) === Math.abs(j)) {
        continue;
      }
      if (column + j < 0 || column + j > 4 || row + i < 0 || row + i > 2) {
        continue;
      }
      if (grid[row + i][column + j] === "_") {
        grid[row + i][column + j] = letter;
        grid[row][column] = "_";
        return grid;
      }
    }
  }

  if (row === blankRow) {
    if (column > blankCol) {
      for (let i = 0; i < column - blankCol; i++) {
        grid[row][blankCol + i] = grid[row][blankCol + i + 1];
      }
      grid[row][column] = "_";
      return grid;
    } else {
      for (let i = 0; i < blankCol - column; i++) {
        grid[row][blankCol - i] = grid[row][blankCol - i - 1];
      }
      grid[row][column] = "_";
      return grid;
    }
  }

  if (column === blankCol) {
    if (row > blankRow) {
      for (let i = 0; i < row - blankRow; i++) {
        grid[blankRow + i][column] = grid[blankRow + i + 1][column];
      }
      grid[row][column] = "_";
      return grid;
    } else {
      for (let i = 0; i < blankRow - row; i++) {
        grid[blankRow - i][column] = grid[blankRow - i - 1][column];
      }
      grid[row][column] = "_";
      return grid;
    }
  }

  return grid;
};

export { moveTile };
