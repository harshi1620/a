import React from "react"

const withLoading = (WrappedComponent) => {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>
    }

    return <WrappedComponent {...props} />
  }
}

export default withLoading;