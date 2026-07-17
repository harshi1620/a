import React, { useContext } from 'react'
import { ContextProv } from './ContextParent'

function Child() {
    let useCon = useContext(ContextProv)
    console.log(useCon)
  return (
    <div>
      <h3>this is context api </h3>
      <h4>Name: {useCon}</h4>
    </div>
  )
}

export default Child
