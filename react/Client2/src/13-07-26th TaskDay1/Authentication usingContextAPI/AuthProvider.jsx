import { createContext, useState } from "react"
import Login from "./Login"


export const AuthContext = createContext()

function AuthProvider() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        <Login/>
    </AuthContext.Provider>
  )
}

export default AuthProvider