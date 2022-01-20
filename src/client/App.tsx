import './App.css';

import Counter from './features/counter/Counter';
import { useState } from 'react';

function App() {
  let [count, setCounter] = useState(0);
  return (
    <div className="App">
      <nav>
        <section>
          <h1>React with Express</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Counter</h2>
          <div
            style={{
              fontSize: '75px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {count}
          </div>
          <Counter onDecrement={() => setCounter(count - 1)} onIncrement={() => setCounter(count + 1)} />
        </section>
      </main>
    </div>
  );
}

export default App;
