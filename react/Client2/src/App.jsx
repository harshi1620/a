import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import ControlledForm from './22-07-26TaskDay3/controlledcomponentsusingReact State/ControlledForm'
import DynamicInput from './22-07-26TaskDay3/Handle input fields dynamically/DynamicInput'
import ValidationForm from './22-07-26TaskDay3/PerformformValidation/ValidationForm'
import DynamicForm from './22-07-26TaskDay3/DisplayFormErrorsDynamically/DynamicForm'
import HandleInput from './22-07-26TaskDay3/Handlemultipleinputfields/HandleInput'
import FormExample from './22-07-26TaskDay3/ImplementTextarea,scrolldown/ForExample'
import RegistrationForm from './22-07-26TaskDay3/Mini Task/RegistrationForm'
// import RegistrationForm from './22-07-26TaskDay3/RegistrationFormwithvalidations/RegistrationForm'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <ControlledForm/>
    <DynamicInput/>
    <ValidationForm/>
    <DynamicForm/>
    <HandleInput/>
    <FormExample/>
    <RegistrationForm/>
    
    </>
  
  )
}

export default App
