import React from "react";
const Linkkilista = ({ lista }) => {
  return (
    <ul>
      {lista.map((item) => (
        <li key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.nimi}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Linkkilista;