import { useSelector, useDispatch } from "react-redux"
import { increment } from "./counterSlice"
import { decrement } from "./CounterSlice"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>&nbsp;&nbsp;
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter;