import React from "react"

// HOC
function withMessage(Component) {
  return function () {
    return (
      <>
        <h2>Welcome!</h2>
        <Component />
      </>
    )
  }
}

// Normal Component
function Home() {
  return <h3>This is Home Page.</h3>;
}

// Reusable HOC
const EnhancedHome = withMessage(Home);

export default function Reu() {
  return <EnhancedHome />
}