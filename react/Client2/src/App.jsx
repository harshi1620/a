import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Counter from './14-07-26TaskDay2/Redux/Counter'
import { store } from './14-07-26TaskDay2/Redux/Store'
import { store2 } from './14-07-26TaskDay2/CreateSlicesUsingRedux/Store'
import { store3 } from './14-07-26TaskDay2/UpdatingAndAcessingGlobalState/Store'
import Student from './14-07-26TaskDay2/CreateSlicesUsingRedux/Student'
import Light from './14-07-26TaskDay2/UpdatingAndAcessingGlobalState/Light'
import A from './10-07-2026TaskDay5/ApiUsingAxios/A'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <A/>
      {/* <Provider store={store}>
        <Counter/>        
      </Provider>
      <Provider store={store2}>
        <Student/>
      </Provider>
      <Provider store={store3}>
        <Light/>
      </Provider> */}
    </>
  
  )
}

export default App
