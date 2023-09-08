import React from "react";
import Hint from "./Hint";
import Grid from "./Grid";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-center m-3">Slide Word Game</h1>
      <h2 className="text-3xl text-center m-2">
        Slide the tiles around to form the phrase!
      </h2>
      <Hint hint={"Here's a hint"} />
      <Grid />
    </div>
  );
};

export default Home;
