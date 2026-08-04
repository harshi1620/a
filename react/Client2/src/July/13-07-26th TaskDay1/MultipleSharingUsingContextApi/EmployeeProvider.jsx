import { createContext, useState } from "react"
import EmployeeDetails from "./EmployeeDetails"
import EmployeeChangeDept from './EmployeeChangeDept'

// Create Context
export const EmployeeContext = createContext()

function EmployeeProvider() {
  const [employee, setEmployee] = useState({
    id: 'NYB9604',
    name: "Harshitha",
    department: "HR",
  })

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      <EmployeeDetails/>
      <EmployeeChangeDept/>
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider;