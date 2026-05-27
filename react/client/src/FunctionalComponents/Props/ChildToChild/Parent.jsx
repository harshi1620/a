import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    let [ data,setdata] = useState(10)
   
    function hai(k) {
        setdata(k)
    }
                
      
  return (
    <div>
      <Child1 j={data}/>     
      <Child2 n={hai}/>     
    </div>
  )
}

export default Parent
