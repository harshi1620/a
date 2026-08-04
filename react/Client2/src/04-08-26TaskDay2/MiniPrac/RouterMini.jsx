import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
import Product from "./Product"
import Dashboard from "./Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import NotFound from "./NotFound"

function RouterMini() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <h1>React Router Project</h1>

      <button onClick={() => setIsLoggedIn(true)}>LoginMini</button>
      <button onClick={() => setIsLoggedIn(false)}>LogoutMini</button>

      <br /><br />

      <Link to="/">Home</Link> |{" "}
      <Link to="/product/101">Product</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic Route */}
        <Route path="/product/:id" element={<Product />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterMini