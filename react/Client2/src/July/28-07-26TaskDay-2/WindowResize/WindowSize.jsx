import React from "react";
import useWindowSize from "./useWindow";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );
}

export default WindowSize;