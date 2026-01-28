import React from "react";
import Infolista from "./Infolista";

const App = () => {
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Teknologiat</h1>
      <Infolista taulukko={tiedot} />
    </div>
  );
};

export default App;
