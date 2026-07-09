import React, { useContext } from 'react'
import { UserContext } from './ObjectSharing'

function ObjectConsumer1() {
    let user = useContext(UserContext)
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  )
}

export default ObjectConsumer1
