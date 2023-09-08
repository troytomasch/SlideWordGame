import React from "react";
import Tile from "./Tile";

const Grid = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  return (
    <div className="flex flex-row flex-wrap w-2/3 gap-3 m-8">
      {letters.map((letter) => {
        return <Tile letter={letter} />;
      })}
    </div>
  );
};

export default Grid;
