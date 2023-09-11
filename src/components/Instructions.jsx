import React from "react";

// Displays the instructions
const Instructions = ({ show, toggleModal }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white border-2 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mx-4 my-6">Instructions</h3>
          <p className="text-black text-lg leading-relaxed relative m-6 flex-auto">
            Move the letters of the slide puzzle around to form the phrase. The
            blank space will always be in the bottom right corner. None of the
            words will spill over on to the next lines. Some of the words could
            be abbreviations. The hint will give you an additional clue if
            you're stuck. The puzzle will light up green when you're correct.
            Enjoy!
          </p>
          <div className="flex items-center justify-center my-3">
            <button
              className="text-black text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
              type="button"
              onClick={() => toggleModal(false)}
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Instructions;
