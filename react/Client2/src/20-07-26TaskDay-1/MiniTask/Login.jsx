import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login/Logout Example</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;