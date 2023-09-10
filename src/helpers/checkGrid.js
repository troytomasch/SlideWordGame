const checkGrid = (grid1, grid2) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (grid1[i][j] === grid2[i][j]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  checkGrid,
};
