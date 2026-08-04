import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function SiblingShareing() {
    let [msg,setMsg]=useState('hello')
  return (
    <div>
      <ChildA setFn={setMsg}/>
      <ChildB msg={msg}/>
    </div>
  )
}

export default SiblingShareing
