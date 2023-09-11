import React, { useState } from "react";
import Instructions from "./Instructions";
import Levels from "./Levels";

// Displays instructions and levels buttons
const Buttons = ({ setLevel }) => {
  const [openLevels, setOpenLevels] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);

  return (
    <div>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => {
            setOpenInstructions((current) => !current);
          }}
          className="border-2 border-black rounded-md p-1 m-2"
        >
          Instructions
        </button>
        <button
          onClick={() => {
            setOpenLevels((current) => !current);
          }}
          className="border-2 border-black rounded-md p-1 m-2"
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
