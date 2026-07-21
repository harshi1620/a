import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import AxiosApi from './21-07-26TaskDay2/ApiCalls/AxiosApi'
import FetchApi from './21-07-26TaskDay2/ApiCalls/FetchApi'
import FetchState from './21-07-26TaskDay2/LoadingErrorStates/FetchState'
import DynamicMap from './21-07-26TaskDay2/Map/DynamicMap'
import Timer from './21-07-26TaskDay2/useEffects/Cleanup function in useEffect'
import Count from './21-07-26TaskDay2/useEffects/useEffect with dependencies'
import EmptyDependency from './21-07-26TaskDay2/useEffects/UseEffectwithEmpty'
import WithoutDependency from './21-07-26TaskDay2/useEffects/useEffectWithoutDependency'
import FetchingCard from './21-07-26TaskDay2/MiniTask/MinniPracticeFetchingCard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AxiosApi/>
    <FetchApi/>
    <FetchState/>
    <DynamicMap/>
    <Timer/>
    <Count/>
    <EmptyDependency/>
    <WithoutDependency/>
    <FetchingCard/>
    </>
  
  )
}

export default App
