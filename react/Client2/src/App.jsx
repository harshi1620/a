import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Router from './03-08-26TaskDay1/Router/Router'
import { BrowserRouter } from 'react-router-dom'
import Router2 from './03-08-26TaskDay1/RoutesRoute/Router2'
import Router3 from './03-08-26TaskDay1/Mini/Router3'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Router/>
        <Router2/>
        <Router3/>
    </BrowserRouter>
    </>
  
  )
}

export default App
