import React, { createContext, useContext } from 'react'
import { UserContext } from './User'


function ChangeUser() {
    let {user,setUser} = useContext(UserContext)
    console.log(user)
  return (
    <div>
      <h1>Username: {user}</h1>
      <p>click the button to change the name</p>
      <button onClick={()=>setUser('Harshitha Gajjala')}>Change Here</button>
    </div>
  )
}

export default ChangeUser
