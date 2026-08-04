import React from 'react'

function FuncVsClassCompo() {
  return (
    <div>
      Functional Components
        Functional Components are simple JavaScript functions that return JSX.
        They use React Hooks such as useState and useEffect for state management and lifecycle functionality.
        They are easier to write, read, and maintain.
        They require less code compared to Class Components.

        Class Components
        Class Components are ES6 classes that extend React.Component.
        They use this.state to manage state and this.setState() to update it.
        They use lifecycle methods such as componentDidMount(), componentDidUpdate(), and componentWillUnmount().
        They require more code and are more complex.
        </div>
  )
}

export default FuncVsClassCompo
