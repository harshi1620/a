import React, { useEffect } from 'react'
import A3 from '../Layout/HigherOrderComponents/CustomHooks/A3'

function SignUp({value}) {
  function hello(){
    console.log("function called")
    fetch("")
    .then(()=>{})
    .then(()=>{})
  }
  A3
  useEffect(()=>{
    console.log("Signup")
    
  },[])

  let handleSignup = (e) => {
    e.preventDefault()
    value()
  }

  return (
    <div>
      <h2>Signup</h2>
      <form action="" onSubmit={handleSignup}>
        <label htmlFor="">Username : </label>
        <input type="email" /><br /><br />

        <label htmlFor="">Password : </label>
        <input type="password" /><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignUp