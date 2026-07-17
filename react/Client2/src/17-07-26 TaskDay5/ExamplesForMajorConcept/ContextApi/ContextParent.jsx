import React, { createContext } from 'react'
import Child from './Child'
export let ContextProv = createContext()
function ContextParent() {
  return (
    <ContextProv.Provider name='Harshitha'>
        <Child/>
    </ContextProv.Provider>
  )
}

export default ContextParent
