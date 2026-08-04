import { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"

function EmployeeDetails() {
  const { employee } = useContext(EmployeeContext)

  return (
    <div style={{border:'1px solid black', padding:'20px',textAlign:'center', borderRadius:'5px',marginBottom:'10px'}}>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
    </div>
  )
}

export default EmployeeDetails