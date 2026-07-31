import React from 'react'
function Child({name}){
    console.log(name)
    return <h2>this is, {name}</h2>
}
function DestructureFunctionalParameters() {
    let name = 'FunctionalDestrucring'
  return (
    <div>
      <Child name={name}/>
    </div>
  )
}

export default DestructureFunctionalParameters
