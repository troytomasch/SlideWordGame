import { randomizeGrid } from "./randomizeGrid";

let grid = [
  ["h", "a", "p", "p", "y"],
  ["h", "a", "p", "p", "y"],
  ["b", "d", "a", "y", "_"],
];

let newGrid = randomizeGrid(grid);

console.log(newGrid);
