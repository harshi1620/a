import React, { useReducer } from "react"

const initialState = {
  cart: []
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.payload
        )
      }

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      }

    default:
      return state
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: Date.now(),
              name: "Laptop"
            }
          })
        }
      >
        Add Laptop
      </button>&nbsp;&nbsp;

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>

      <ul>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name}

            &nbsp;&nbsp;<button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Items: {state.cart.length}</h3>
    </div>
  )
}

export default ShoppingCart