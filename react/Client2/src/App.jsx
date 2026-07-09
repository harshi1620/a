import { useState } from 'react'
import './App.css'
import App1 from './09-07-26th TaskDay4/ContextApi/App'
import LocalStateCounter from './09-07-26th TaskDay4/ContextApi/LocalStateCounter'
import ObjectSharing from './09-07-26th TaskDay4/ContextApi/ObjectSharing'
import App2 from './09-07-26th TaskDay4/ContextApiImplementation/App'
import App3 from './09-07-26th TaskDay4/ContextApiImplementation/CounterContext/App'
import App4 from './09-07-26th TaskDay4/ContextApiImplementation/NestedComonents/App'
import User from './09-07-26th TaskDay4/GlobalState/User'
import DemostrateLocalState from './09-07-26th TaskDay4/LocalState/DemostrateLocalState'
import EventBasedUpdates from './09-07-26th TaskDay4/LocalState/EventBasedUpdates'
import InputLocalState from './09-07-26th TaskDay4/LocalState/InputLocalState'
import LocalState from './09-07-26th TaskDay4/LocalState/LocalState'
import UpdateLocalState from './09-07-26th TaskDay4/LocalState/UpdateLocalState'
import Theme from './09-07-26th TaskDay4/LocalVsGlobalState/Theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <App1/>
      <LocalStateCounter/>
      <ObjectSharing/>
      <App2/>
      <App3/>
      <App4/>
      <User/>
      <DemostrateLocalState/>
      <EventBasedUpdates/>
      <EventBasedUpdates/>
      <InputLocalState/>
      <LocalState/>
      <UpdateLocalState/>
      <Theme/>
    </>
  
  )
}

export default App
