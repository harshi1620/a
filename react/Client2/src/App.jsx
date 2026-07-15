import { useState } from 'react'
import './App.css'
import ComplexStateUsingUseReducer from './15-07-26TaskDay3/ComplexStateUsingUseReducer'
import ShoppingCart from './15-07-26TaskDay3/CounterFormHandlingShoppingCartManagement'
import Dispatch from './15-07-26TaskDay3/DispatchFunctionality'
import Counter from './15-07-26TaskDay3/ReducerFunctionsDiffactionTypes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ComplexStateUsingUseReducer/><br />
    <ShoppingCart/><br />
    <Dispatch/><br />
    <Counter/>
    </>
  
  )
}

export default App
