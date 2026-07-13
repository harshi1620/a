import { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"

function EmployeeDetails() {
  const { employee, setEmployee } = useContext(EmployeeContext)

  const changeDepartment = () => {
    setEmployee({
      ...employee,
      department: "IT",
    })
  }

  return (
    <div>
      <button onClick={changeDepartment}>
        Change Department
      </button>
    </div>
  )
}

export default EmployeeDetails