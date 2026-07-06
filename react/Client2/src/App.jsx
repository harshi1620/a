import { useState } from 'react'
import './App.css'
import PersonalInfo from './06-07-26TaskDay1/PersonalInfo'
import List from './06-07-26TaskDay1/multipleJSXelementsinside'
import List2 from './06-07-26TaskDay1/MultiplejsxExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalInfo/>  
    <List/>
    <List2/>
    </>
  )
}

export default App
