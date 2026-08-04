import React, { useContext } from 'react'
import { userContext } from './User'

function UserProfile() {
    let name = useContext(userContext)
    console.log(name)
  return (
    <div>
      <h1>Hello user, {name}</h1>
    </div>
  )
}

export default UserProfile
