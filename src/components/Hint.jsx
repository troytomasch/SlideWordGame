import React, { useEffect, useState } from "react";

const Hint = ({ hint, level }) => {
  const [showHint, setShowHint] = useState(false);
  let displayHint = null;
  if (showHint) {
    displayHint = <h3>{hint}</h3>;
  }

  useEffect(() => {
    setShowHint(false);
  }, [level]);

  return (
    <div className="flex flex-row items-center gap-2">
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
