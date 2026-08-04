import React from "react"

function withLoading(Loading) {
  return function LoadingComponent(props) {
    console.log(props)
    if (props.isLoading) {
      return <h2>Loading...</h2>
    }

    return <Loading {...props} />
  }
}

export default withLoading;