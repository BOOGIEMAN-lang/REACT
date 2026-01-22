import React from 'react';


function Tervehdys({ nimi }) {
  return (
    <div>
      <h1>Hei, {nimi}!</h1>
    </div>
  );
}


function OpiskelijaTiedot({ opiskelija }) {
  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}


function App() {
  const opiskelija = {
    nimi: "Albion",
    ika: 17,
    kurssi: "Reactin perusteet"
  };

  return (
    <div className="App">
    
      <Tervehdys nimi={opiskelija.nimi} />

      
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;