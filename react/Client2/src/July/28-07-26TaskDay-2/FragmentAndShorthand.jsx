import React from "react";

function FragmentAndShorthand() {
  return (
    <>
      <React.Fragment>
        <h1>React Fragments</h1>
      </React.Fragment>

      <>
        <p>This paragraph is inside the shorthand fragment.</p>
      </>
    </>
  )
}

export default FragmentAndShorthand