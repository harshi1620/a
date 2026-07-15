import React, { useReducer } from "react"

const initialState = {
  name: "",
  age: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      }

    case "SET_AGE":
      return {
        ...state,
        age: action.payload
      }

    default:
      return state
  }
}

function ComplexStateUsingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Name: {state.name}</h2>
      <h2>Age: {state.age}</h2>

      <button
        onClick={() =>
          dispatch({ type: "SET_NAME", payload: "Ammu" })
        }
      >
        Set Name
      </button>&nbsp;&nbsp;

      <button
        onClick={() =>
          dispatch({ type: "SET_AGE", payload: 35 })
        }
      >
        Set Age
      </button>
    </div>
  )
}

export default ComplexStateUsingUseReducer