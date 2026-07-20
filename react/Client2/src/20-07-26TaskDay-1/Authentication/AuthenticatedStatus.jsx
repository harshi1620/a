import React from "react";

function AuthenticatedStatus() {
  const isAuthenticated = true;

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome to the Dashboard</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}

export default AuthenticatedStatus;