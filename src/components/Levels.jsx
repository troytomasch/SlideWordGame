import React from "react";
import { grids } from "../helpers/grids";

// Displays the level choices
const Levels = ({ show, setLevel, toggleModal }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-auto my-6 mx-auto max-w-3xl bg-slate-400 border-2 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mx-4 my-6 text-white">
            Levels
          </h2>
          <h3 className="text-white text-xl leading-relaxed relative m-6 flex-auto">
            Select a level:
          </h3>
          <div className="flex flex-wrap flex-row m-4 gap-2">
            {grids.map((grid) => {
              return (
                <button
                  className="text-cyan-200 bg-slate-700 text-md px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  onClick={() => {
                    setLevel(grid[4]);
                    toggleModal(false);
                  }}
                  key={grid[1]}
                >
                  {grid[3]}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-10 my-2">
            <button
              className="text-black bg-white text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
              type="button"
              onClick={() => toggleModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 bg-black"></div>
    </>
  );
};

export default Levels;
