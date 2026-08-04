import React, { createContext, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

export let CounterContext = createContext()

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <h1>React Context Counter</h1>
      <CounterDisplay />
      <CounterButtons />
    </CounterContext.Provider>
  );
}

export default App;