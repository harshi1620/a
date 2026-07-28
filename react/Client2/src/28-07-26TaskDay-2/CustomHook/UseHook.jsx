import React from "react";
import useCounter from "./UseCounter";

function UseHook() {
  const { count, increase } = useCounter();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default UseHook;