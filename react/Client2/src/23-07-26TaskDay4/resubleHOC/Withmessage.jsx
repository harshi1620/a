import React from "react"

const Withmessage = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h3>Hello from HOC!</h3>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Withmessage