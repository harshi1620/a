import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

function RouterProfile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterProfile