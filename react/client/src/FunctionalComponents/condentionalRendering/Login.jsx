import React, { useEffect, useState } from 'react'

function Login({ value }) {
 let [a,seta]=useState("")
useEffect(()=>{
  console.log("Login")
},[])
  useEffect(()=>{
      console.log(a)
  },[a])
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login button clicked")
    console.log(e)
    value()
  }
    let handlechange =(event)=>{
      console.log("handle change called")
      // console.log(j.target)
      seta(event.target.value)
    }
  return (
    <div>
      <h3>Login</h3>
      <input type='text' value={a} onChange={handlechange}/>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="">Username : </label>
        <input type="email" name="" id="" /> <br /><br />

        <label htmlFor="">Password : </label>
        <input type="password" /> <br /><br />

        <button type="submit">Login</button>
      </form>  <br></br>
      <button onClick={handleSubmit}>click this</button>
    </div>
  )
}

export default Login
