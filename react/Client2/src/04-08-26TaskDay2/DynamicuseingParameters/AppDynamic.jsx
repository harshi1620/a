import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import User from "./User"

function AppDynamic() {
  return (
    <BrowserRouter>      

      <Link to="/user/101">Go to User 101</Link>

      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppDynamic