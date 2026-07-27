import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import APICall from './27-07-26TaskDay-1/FetchAPIAndAxios/APICall'
import Axios from './27-07-26TaskDay-1/FetchAPIAndAxios/Axios'
import GetPush from './27-07-26TaskDay-1/GetPush'
import HandleLoading from './27-07-26TaskDay-1/HandleLoading'
import DynamicMap from './27-07-26TaskDay-1/DynamicMap'
import UseEffecthook from './27-07-26TaskDay-1/useEffecthook'
import Apper from './27-07-26TaskDay-1/ApiCallsReact/App'
import FetchApi from './27-07-26TaskDay-1/PracticalExamples/FetchApi'
import Users from './27-07-26TaskDay-1/PracticalExamples/Users'
import Parent from './27-07-26TaskDay-1/PracticalExamples/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <APICall/>
    <Axios/>
    <GetPush/>   
    <HandleLoading/>
    <DynamicMap/>
    <UseEffecthook/>
    <Apper/>
    <FetchApi/>
    <Users/>
    <Parent/>
    </>
  
  )
}

export default App
