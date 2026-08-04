import React from "react";

function withTitle(Component) {
  return function () {
    return (
      <>
        <h2>Counter Application</h2>
        <Component />
      </>
    );
  };
}

export default withTitle;