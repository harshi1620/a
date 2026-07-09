import React, { useContext } from 'react'
import { UserContext } from './ObjectSharing'

function ObjectConsumer2() {
    let {name,email} = useContext(UserContext)
  return (
    <div>
      <h2>User Details:</h2>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  )
}

export default ObjectConsumer2
