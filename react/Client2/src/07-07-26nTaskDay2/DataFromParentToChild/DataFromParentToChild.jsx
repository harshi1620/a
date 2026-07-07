import React, { useState } from 'react'

function Child({name}){
    console.log(name)
    // console.log(name.name)
    return(
        <h2>this is child {name.name}</h2>
    )
}
function DataFromParentToChild() {
    let [name,setName]=useState('reaact')
  return (
    <div>
      <Child name={name}/>
    </div>
  )
}

export default DataFromParentToChild
