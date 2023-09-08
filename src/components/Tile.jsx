import React from "react";

const Tile = (props) => {
  const letter = props.letter;

  return (
    <div className="w-1/6 h-24 border-2 border-black flex items-center justify-center flex-row">
      <h1 className="text-3xl">{letter}</h1>
    </div>
  );
};

export default Tile;
