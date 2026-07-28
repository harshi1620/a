import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import FragmentUnnecessaryDOM from './28-07-26TaskDay-2/FragmentUnnecessaryDOM'
import FragmentAndShorthand from './28-07-26TaskDay-2/FragmentAndShorthand'
import useCounter from './28-07-26TaskDay-2/reusable Custom Hooks/useCounter'
import A from './28-07-26TaskDay-2/reusable Custom Hooks/A'
import CountApp from './28-07-26TaskDay-2/MiniPractice/CountApp'
import UseHook from './28-07-26TaskDay-2/CustomHook/UseHook'
import Users from './28-07-26TaskDay-2/UseFetchHook/Users'
import Form from './28-07-26TaskDay-2/FormHandle/Form'
import WindowSize from './28-07-26TaskDay-2/WindowResize/WindowSize'
import Theme from './28-07-26TaskDay-2/ThemeToggle/Theme'
import ReusableHoc from './28-07-26TaskDay-2/ResuableHOCs'
// import App from './28-07-26TaskDay-2/ResuableHOCs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FragmentUnnecessaryDOM/>
    <FragmentAndShorthand/>
    <useConter/>
    <A/>
    <CountApp/>
    <UseHook/>
    <Users/> 
    <Form/>   
    <WindowSize/>
    <Theme/>
    <ReusableHoc/>
    </>
  
  )
}

export default App
