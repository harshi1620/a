import React, { createContext, useState } from 'react'
import ChangeUser from './ChangeUser'

export let UserContext = createContext()

function User() {
    let [user,setUser] = useState('Harshitha')
  return (
    <UserContext.Provider value={{user,setUser}}>
        <ChangeUser/>
    </UserContext.Provider>
  )
}

export default User
