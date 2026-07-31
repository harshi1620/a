import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import DynamicMap from './31-07-26TaskDay-5/DynamicMap'
import NestedLists from './31-07-26TaskDay-5/NestedLists'
import ConditionalRendering from './31-07-26TaskDay-5/ConditionalRendering'
import ObjectDestructuring from './31-07-26TaskDay-5/ObjectDestructuring'
import ArrayDestructuring from './31-07-26TaskDay-5/ArrayDestructuring'
import DestructurePropsState from './31-07-26TaskDay-5/DestructurePropsState'
import DestructureFunctionalParameters from './31-07-26TaskDay-5/DestructureFunctionalParameters'
import Loader from './31-07-26TaskDay-5/LazyLoading/Loader'
import Loader2 from './31-07-26TaskDay-5/LazyLoading/Loader2'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DynamicMap/>
    <NestedLists/>
    <ConditionalRendering/>
    <ObjectDestructuring/>
    <ArrayDestructuring/>
    <DestructurePropsState/>
    <DestructureFunctionalParameters/>
    <Loader/>
    <Loader2/>
    </>
  
  )
}

export default App
