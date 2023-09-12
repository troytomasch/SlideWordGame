import React from "react";

// Individual tile
const Tile = ({ letter, update, correct, row, column }) => {
  let background = "bg-slate-800";

  if (letter === "_") {
    return <div className="w-1/6 h-24 m-1"></div>;
  }

  if (correct) {
    background = "bg-green-500";
  }

  let style = `w-1/6 h-24 border-2 border-white flex items-center justify-center flex-row hover:cursor-pointer ${background} rounded-md m-1`;

  return (
    <div
      className={style}
      onClick={() => {
        update(letter, row, column);
      }}
    >
      <h1 className="text-3xl text-white">{letter}</h1>
    </div>
  );
};

export default React.memo(Tile);
