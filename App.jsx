import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Arvo: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Kasvatus
      </button>

      <button onClick={() => setCount(count - 1)}>
        Vähennys
      </button>

      <button onClick={() => setCount(0)}>
        Nollaus
      </button>
    </div>
  );
}

export default Counter;
