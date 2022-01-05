import React from "react";
import { useAppSelector } from "./app/hooks";
import "./App.css";

import Counter from "./features/counter/Counter";

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
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
              fontSize: "75px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {count}
          </div>
          <Counter />
        </section>
      </main>
    </div>
  );
};

export default App;
