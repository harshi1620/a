import React, { useContext } from "react";
import{CounterContext} from "./App";

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return <h2>Count: {count}</h2>;
}

export default CounterDisplay;