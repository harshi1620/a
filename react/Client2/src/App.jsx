import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import EventBinding from './30-07-26TaskDay-4/EventBinding'
import Eventhandler from './30-07-26TaskDay-4/Eventhandler'
import EventLoginForm from './30-07-26TaskDay-4/EventLoginForm'
import Apper from './30-07-26TaskDay-4/Mini/Apper'
import Modal2 from './30-07-26TaskDay-4/Portal/Modal'
import ToolTip from './30-07-26TaskDay-4/Portal/ToolTip'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventBinding/>
    <Eventhandler/>
    <EventLoginForm/>
    <Apper/>
    <Modal2/>
    <ToolTip/>
    </>
  
  )
}

export default App
