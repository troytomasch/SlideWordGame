import React, { useEffect, useState } from "react";

// Shows the hint button and hint
const Hint = ({ hint, level }) => {
  const [showHint, setShowHint] = useState(false);
  let style = "font-semibold text-cyan-100 blur";
  if (showHint) {
    style = "font-semibold text-cyan-100";
  }

  useEffect(() => {
    setShowHint(false);
  }, [level]);

  return (
    <div className="flex flex-row items-center gap-2 m-2">
      <button
        onClick={() => {
          setShowHint(true);
        }}
        className="border-2 border-white rounded-md p-1 text-cyan-100 bg-slate-700"
      >
        Click here to reveal a hint!
      </button>
      <h3 className={style}>{hint}</h3>
    </div>
  );
};

export default Hint;
