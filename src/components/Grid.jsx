import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { moveTile } from "../helpers/moveTile";
import { grids } from "../helpers/grids";
import { randomizeGrid } from "../helpers/randomizeGrid";
import { checkGrid } from "../helpers/checkGrid";

// Displays the grid of tiles
const Grid = ({ level }) => {
  let finalGrid = grids[level][0];
  const [grid, setGrid] = useState(randomizeGrid(finalGrid));
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setGrid(randomizeGrid(finalGrid));
    setCorrect(false);
  }, [level, finalGrid]);

  const updateGrid = (letter, row, column) => {
    if (correct) {
      return;
    }
    let newGrid = moveTile(letter, grid, row, column);
    let updatedGrid = [];
    for (let i of newGrid) {
      updatedGrid.push(i);
    }
    setGrid(updatedGrid);
    if (checkGrid(updatedGrid, finalGrid)) {
      setCorrect(true);
    }
  };

  let column = -1;

  return (
    <div className="flex flex-row flex-wrap justify-between xl:w-2/3 w-11/12 xl:gap-3 gap-0.5 m-8 bg-slate-400 rounded-md xl:p-4">
      {grid[0].map((letter) => {
        column++;
        return (
          <Tile
            letter={letter}
            update={updateGrid}
            row={0}
            column={column}
            correct={correct}
          />
        );
      })}
      {grid[1].map((letter) => {
        if (column === 4) {
          column = -1;
        }
        column++;
        return (
          <Tile
            letter={letter}
            update={updateGrid}
            row={1}
            column={column}
            correct={correct}
          />
        );
      })}
      {grid[2].map((letter) => {
        if (column === 4) {
          column = -1;
        }
        column++;
        return (
          <Tile
            letter={letter}
            update={updateGrid}
            row={2}
            column={column}
            correct={correct}
          />
        );
      })}
    </div>
  );
};

export default Grid;
