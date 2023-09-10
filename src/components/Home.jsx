import React, { useState } from "react";
import Hint from "./Hint";
import Grid from "./Grid";
import { grids } from "../helpers/grids";
import Buttons from "./Buttons";

const Home = () => {
  const [level, setLevel] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl m-3">Slide Word Game</h1>
      <Buttons setLevel={setLevel} />
      <h2 className="text-2xl m-2">Clue: {grids[level][1]}</h2>
      <Hint hint={grids[level][2]} level={level} />
      <Grid level={level} />
    </div>
  );
};

export default Home;
