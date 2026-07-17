import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Parent from './17-07-26 TaskDay5/ExamplesForMajorConcept/PropDrilling/Parent'
import UseState from './17-07-26 TaskDay5/ExamplesForMajorConcept/UseState/UseState'
import {store} from './17-07-26 TaskDay5/ExamplesForMajorConcept/Redux/Store'
import Counter from './17-07-26 TaskDay5/ExamplesForMajorConcept/Redux/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parent name='Harshitha'/>
    <UseState/>
    <Provider store={store}>
      <Counter/>
    </Provider>
    </>
  
  )
}

export default App
