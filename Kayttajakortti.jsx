import React from "react";
import Tervehdys from "./Tervehdys";
import Infolista from "./Infolista";

const Kayttajakortti = ({ nimi, lista }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <Tervehdys nimi={nimi} />

      <Infolista taulukko={lista} />
    </div>
  );
};

export default Kayttajakortti;