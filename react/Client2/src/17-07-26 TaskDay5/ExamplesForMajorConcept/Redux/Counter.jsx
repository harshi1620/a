import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incByAmount,
} from "./CounterSlice"

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>&nbsp;&nbsp;

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default Counter