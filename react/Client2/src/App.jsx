import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Reactmemo from './29-07-26TaskDay-3/Reactmemo'
import Calculation from './29-07-26TaskDay-3/calculation'
import Recreation from './29-07-26TaskDay-3/recreation'
import UseuseCallback from './29-07-26TaskDay-3/UseuseCallback'
import AppComponent from './29-07-26TaskDay-3/MiniTask/AppComponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Reactmemo/>
    <Calculation/>
    <Recreation/>
    <UseuseCallback/>
    <AppComponent/>
  
    </>
  
  )
}

export default App
