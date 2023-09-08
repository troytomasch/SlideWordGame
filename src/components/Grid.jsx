import React, { useState } from "react";
import Tile from "./Tile";
import { moveTile } from "../helpers/moveTile";

const Grid = () => {
  const [grid, setGrid] = useState([
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "j"],
    ["_", "k", "l", "m", "n"],
  ]);

  const updateGrid = (letter) => {
    let newGrid = moveTile(letter, grid);
    let updatedGrid = [];
    for (let i of newGrid) {
      updatedGrid.push(i);
    }
    setGrid(updatedGrid);
  };

  return (
    <div className="flex flex-row flex-wrap w-2/3 gap-3 m-8">
      {grid[0].map((letter) => {
        return <Tile letter={letter} key={letter} update={updateGrid} />;
      })}
      {grid[1].map((letter) => {
        return <Tile letter={letter} key={letter} update={updateGrid} />;
      })}
      {grid[2].map((letter) => {
        return <Tile letter={letter} key={letter} update={updateGrid} />;
      })}
    </div>
  );
};

export default Grid;
