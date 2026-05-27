import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Dec, Inc } from '../globalState/toolkit/reducer'

function A() {
  let d=useSelector((state)=>{
      return state.count.value
    })
    let dispatch=useDispatch()
    console.log(d)
    
  return (
    <div>
        A
        <h1>{d}</h1>
        <button on onClick={()=>dispatch(Inc())}>Inc</button>
        <button on onClick={()=>dispatch(Dec())}>Dec</button>

        
      
    </div>
  )
}

export default A
