import React, { useState } from 'react'
import Daughter from './Daughter'

function Mother() {
  let [data,setData]=useState(10)
  return (
    <div>
      <Daughter props={data}/>
    </div>
  )
}

export default Mother
