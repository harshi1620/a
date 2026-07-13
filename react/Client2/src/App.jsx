import { useState } from 'react'
import './App.css'
import AuthProvider from './13-07-26th TaskDay1/Authentication usingContextAPI/AuthProvider'
import User from './13-07-26th TaskDay1/ConfigureContextApiaReact Appli/User'
import EmployeeProvider from './13-07-26th TaskDay1/MultipleSharingUsingContextApi/EmployeeProvider'
import ThemeProvider from './13-07-26th TaskDay1/ProviderConsumers/ThemeProvider'
import LanguageProvider from './13-07-26th TaskDay1/useContext()hook acce sharedData/LanguageProvider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider/>
      <User/>
      <EmployeeProvider/>
      <ThemeProvider/>
      <LanguageProvider/>

    </>
  
  )
}

export default App
