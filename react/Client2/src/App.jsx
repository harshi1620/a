import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import NestedRoutes from './04-08-26TaskDay2/NestedRoutes/NestedRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NestedRoutes/>
    </>
  
  )
}

export default App
