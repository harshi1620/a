import React, { useContext } from 'react'
import { userContext } from './User'

function Profile() {
    let name = useContext(userContext)
  return (
    <div>
      <h2>Welcome, {name}</h2>
    </div>
  )
}

export default Profile
