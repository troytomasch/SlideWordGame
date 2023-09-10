import React from "react";

const Tile = ({ letter, update, correct, row, column }) => {
  let background = "bg-white";

  if (letter === "_") {
    return <div className="w-1/6 h-24 m-1"></div>;
  }

  if (correct) {
    background = "bg-green-500";
  }

  let style = `w-1/6 h-24 border-2 border-black flex items-center justify-center flex-row hover:cursor-pointer ${background} rounded-md m-1`;

  return (
    <div
      className={style}
      onClick={() => {
        update(letter, row, column);
      }}
    >
      <h1 className="text-3xl">{letter}</h1>
    </div>
  );
};

export default React.memo(Tile);
