import { useSelector, useDispatch } from "react-redux"
import { changeName, increaseAge } from "./studentSlice"

function Student() {
  const student = useSelector((state) => state.student)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>

      <button onClick={() => dispatch(changeName("Harshitha"))}>
        Change Name
      </button>&nbsp;&nbsp;

      <button onClick={() => dispatch(increaseAge())}>
        Increase Age
      </button>
    </div>
  )
}

export default Student