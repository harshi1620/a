import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import ExampleConcept from './24-07-26TaskDay5/ExamplesConcept'
import DocumentUseCase from './24-07-26TaskDay5/DocumentUseCase'
// import withGreeting from './24-07-26TaskDay5/withGreeting'
import WithGreeting from './24-07-26TaskDay5/withGreeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExampleConcept/>
    <DocumentUseCase/>
    <WithGreeting/>

    
    </>
  
  )
}

export default App
