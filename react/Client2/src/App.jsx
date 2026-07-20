import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import AuthenticatedStatus from './20-07-26TaskDay-1/Authentication/AuthenticatedStatus'
import AuthenticationSwitch from './20-07-26TaskDay-1/Authentication/AuthenticationSwitch'
import RoleRendering from './20-07-26TaskDay-1/Authentication/RoleRendering'
import IfElse from './20-07-26TaskDay-1/CondtionalRen/IfElse'
import LoadingState from './20-07-26TaskDay-1/LoadingStates/LoadingState'
import LogicalOp from './20-07-26TaskDay-1/CondtionalRen/LogicalOp'
import SwichCase from './20-07-26TaskDay-1/CondtionalRen/SwichCase'
import Ternary from './20-07-26TaskDay-1/CondtionalRen/Ternary'
import ShowHide from './20-07-26TaskDay-1/Dynamically/ShowHide'
import ShowHideTernary from './20-07-26TaskDay-1/Dynamically/ShowHideTernary'
import EmptyUsers from './20-07-26TaskDay-1/LoadingStates/EmptyUsers'
import Users from './20-07-26TaskDay-1/LoadingStates/Users'
import Login from './20-07-26TaskDay-1/MiniTask/Login'
import UserDashboards from './20-07-26TaskDay-1/MiniTask/UserDashboards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Authentication</h2>
<AuthenticatedStatus/>
<AuthenticationSwitch/>
<RoleRendering/>
<hr />
<h2>ConditionalRendering</h2>
<IfElse/>
<LogicalOp/>
<SwichCase/>
<Ternary/>
<hr />
<h2>Dynamically</h2>
<ShowHide/>
<ShowHideTernary/>
<hr />
<h2>Loading States</h2>
<EmptyUsers/>
<LoadingState/>
<Users/>
<hr />
<h2>MiniTask's</h2>
<Login/>
<UserDashboards/>
    </>
  
  )
}

export default App
