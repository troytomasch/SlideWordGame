import React, { useState } from "react";

const Hint = (props) => {
  const [showHint, setShowHint] = useState(false);
  const hint = props.hint;
  let displayHint = null;
  if (showHint) {
    displayHint = <h3>{hint}</h3>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => {
          setShowHint(true);
        }}
        className="border-2 border-black rounded-md p-1"
      >
        Click here to reveal a hint!
      </button>
      {displayHint}
    </div>
  );
};

export default Hint;
