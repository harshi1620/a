
 import React, { useEffect, useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Profile() {
  useEffect(()=>{
    console.log("Profile page")
  },[])

  let [login, setLogin] = useState(false)
  let [exist, setExist] = useState(true)

  let changeLogin = () => {
    setLogin(true)
  }

  let changeSignup = () => {
    setExist(true)
  }

  return (
    <div>

      {
        login
          ? <div><h2>Profile</h2></div>
          : exist
            ? <Login value={changeLogin} />
            : <SignUp value={changeSignup} />
      }

      {
        login
          ? <button onClick={() => setLogin(false)}>Logout</button>
          : exist
            ? <div>
                <p>new User? click</p>
                <button onMouseEnter={() => setExist(false)}>Signup</button>
              </div>
            : <div>
                <p>existing user? click</p>
                <button onClick={() => setExist(true)}>Login</button>
              </div>
      }

    </div>
  )
}

export default Profile