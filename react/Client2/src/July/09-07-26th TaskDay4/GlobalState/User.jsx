import React, { createContext, useState } from 'react'
import Profile from './Profile'
import UserProfile from './UserProfile'

export let userContext = createContext()

function User() {
    let [name,setName] = useState('Harshitha')
  return (
    <div>
      <userContext.Provider value={name}>
        <Profile/>
        <UserProfile/>
      </userContext.Provider>      
    </div>
  )
}

export default User
