import React from "react"

function SwichCase() {
  const status = "loading"

  let content

  switch (status) {
    case "loading":
      content = <h1>Loading...</h1>
      break

    case "success":
      content = <h1>Data Loaded Successfully!</h1>
      break

    case "error":
      content = <h1>Something Went Wrong!</h1>
      break

    default:
      content = <h1>Unknown Status</h1>
  }

  return <div>{content}</div>
}

export default SwichCase