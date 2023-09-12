import React, { useState } from "react";
import Instructions from "./Instructions";
import Levels from "./Levels";

// Displays instructions and levels buttons
const Buttons = ({ setLevel }) => {
  const [openLevels, setOpenLevels] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);

  return (
    <div>
      <div className="flex flex-row lg:gap-4">
        <button
          onClick={() => {
            setOpenInstructions((current) => !current);
          }}
          className="border-2 border-white rounded-md p-2 m-2 text-cyan-200 text-xl bg-slate-700"
        >
          Instructions
        </button>
        <button
          onClick={() => {
            setOpenLevels((current) => !current);
          }}
          className="border-2 border-white rounded-md p-2 m-2 text-cyan-200 text-xl bg-slate-700"
        >
          Levels
        </button>
      </div>

      <Instructions show={openInstructions} toggleModal={setOpenInstructions} />
      <Levels
        show={openLevels}
        setLevel={setLevel}
        toggleModal={setOpenLevels}
      />
    </div>
  );
};

export default Buttons;
