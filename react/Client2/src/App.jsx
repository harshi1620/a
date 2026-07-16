import { useState } from 'react'
import './App.css'
import LocalState from './16-07-26TaskDay4/DemonstratingConcepts/LocalState/LocalState'
import SharedState from './16-07-26TaskDay4/DemonstratingConcepts/ContextApi/SharedState'
import { Provider } from 'react-redux'
import Counter from './16-07-26TaskDay4/DemonstratingConcepts/Redux/Counter'
import { store } from './16-07-26TaskDay4/DemonstratingConcepts/Redux/Store'
import User from './16-07-26TaskDay4/PreviousConcepts/User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LocalState/>
    <SharedState/>
    <Provider store={store}>
      <Counter/>
    </Provider>
    <User/>
    </>
  
  )
}

export default App
