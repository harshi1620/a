import React from 'react'
import EventBasedUpdates from './EventBasedUpdates'
import InputLocalState from './InputLocalState'
import LocalState from './LocalState'
import UpdateLocalState from './UpdateLocalState'

function DemostrateLocalState() {
  return (
    <div>
      <EventBasedUpdates/>
      <InputLocalState/>
      <LocalState/>
      <UpdateLocalState/>
    </div>
  )
}

export default DemostrateLocalState
