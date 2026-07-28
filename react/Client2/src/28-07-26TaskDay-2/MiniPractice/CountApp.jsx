import React from "react";
import Counter from "./Counter";
import withTitle from "./HOC";

const NewCounter = withTitle(Counter);

function CountApp() {
  return (
    <>
      <NewCounter />
    </>
  );
}

export default CountApp;