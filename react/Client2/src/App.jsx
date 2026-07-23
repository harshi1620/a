import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import AuthHOC from './23-07-26TaskDay4/Implement/AuthHOC'
import Home from './23-07-26TaskDay4/Implement/Home'
import Loading from './23-07-26TaskDay4/Implement/Loading'
import Admin from './23-07-26TaskDay4/Implement/Admin'
import Users from './23-07-26TaskDay4/Mini/Users'
import Home2 from './23-07-26TaskDay4/resubleHOC/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Loading/>
    <Admin/>
    <Users/>
    <Home2/>
    
    </>
  
  )
}

export default App
