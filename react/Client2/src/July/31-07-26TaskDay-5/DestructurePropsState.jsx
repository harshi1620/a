import React from 'react'

function Child (props){
    console.log(props)
    let {name} = props
    return <h1>welcome this is, {name}</h1>
}
function DestructurePropsState() {
    let name = 'Destructuring Props'
  return (
    <div>
      <Child name={name}/>
    </div>
  )
}

export default DestructurePropsState
