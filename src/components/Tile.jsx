import React from "react";

const Tile = (props) => {
  const letter = props.letter;
  const update = props.update;

  if (letter === "_") {
    return <div className="w-1/6 h-24"></div>;
  }

  return (
    <div
      className="w-1/6 h-24 border-2 border-black flex items-center justify-center flex-row hover:cursor-pointer"
      onClick={() => {
        update(letter);
      }}
    >
      <h1 className="text-3xl">{letter}</h1>
    </div>
  );
};

export default React.memo(Tile);
