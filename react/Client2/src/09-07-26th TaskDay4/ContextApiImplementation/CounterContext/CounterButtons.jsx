import React, { useContext } from "react";
import {CounterContext} from "./App";

function CounterButtons() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>&nbsp;&nbsp;

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>&nbsp;&nbsp;

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterButtons;