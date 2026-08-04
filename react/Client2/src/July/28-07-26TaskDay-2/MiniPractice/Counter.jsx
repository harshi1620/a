import React from "react";
import useCounter from "./UseCounter2";

function Counter() {
  const { count, increase } = useCounter();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default Counter;