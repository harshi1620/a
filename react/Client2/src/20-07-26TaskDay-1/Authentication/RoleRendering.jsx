import React from "react";

function RoleRendering() {
  const isAuthenticated = true;
  const role = "admin";

  if (!isAuthenticated) {
    return <h2>Please Login</h2>;
  }

  return (
    <div>
      <h1>Welcome!</h1>

      {role === "admin" && <h2>Admin Panel</h2>}
      {role === "editor" && <h2>Editor Panel</h2>}
      {role === "user" && <h2>User Dashboard</h2>}
    </div>
  );
}

export default RoleRendering;