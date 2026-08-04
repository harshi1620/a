import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./User2"

function Acess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Acess