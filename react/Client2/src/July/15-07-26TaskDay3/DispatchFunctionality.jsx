// Initial state
let state = {
  count: 0
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

// Dispatch function
export default function Dispatch(action) {
  state = reducer(state, action);
  console.log("Updated State:", state);
}

// Dispatching actions
Dispatch({ type: "INCREMENT" });
Dispatch({ type: "INCREMENT" });
Dispatch({ type: "DECREMENT" });
Dispatch({ type: "RESET" });