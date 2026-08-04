import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Page from './04-08-26TaskDay2/Createcustom404NotFound page/Page'
import Acess from './04-08-26TaskDay2/AcessRouteParameter/Acess'
import AppDynamic from './04-08-26TaskDay2/DynamicuseingParameters/AppDynamic'
import Navigation1 from './04-08-26TaskDay2/NavigateprogramusingNavigate/Navigation'
import Router from './04-08-26TaskDay2/ProtectdRoutes/RouterProfile'
import RouterProfile from './04-08-26TaskDay2/PassingDataRoutes/RouterProfile'
import RouterMini from './04-08-26TaskDay2/MiniPrac/RouterMini'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page/>   
      <Acess/>  
      <AppDynamic/>
      <Navigation1/>
      <Router/>
      <RouterProfile/>
      <RouterMini/>
    </>
  
  )
}

export default App
