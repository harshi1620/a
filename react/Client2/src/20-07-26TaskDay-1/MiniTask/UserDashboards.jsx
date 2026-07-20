import React, { useState } from "react";

function AdminDashboard() {
  return <h2>Welcome to the Admin Dashboard</h2>;
}

function ManagerDashboard() {
  return <h2>Welcome to the Manager Dashboard</h2>;
}

function UserDashboard() {
  return <h2>Welcome to the User Dashboard</h2>;
}

function GuestDashboard() {
  return <h2>Welcome to the Guest Dashboard</h2>;
}

function UserDashboards() {
  const [userType, setUserType] = useState("guest");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Role-Based Dashboard</h1>
      
      <button onClick={() => setUserType("admin")}>Admin</button>{" "}
      <button onClick={() => setUserType("manager")}>Manager</button>{" "}
      <button onClick={() => setUserType("user")}>User</button>{" "}
      <button onClick={() => setUserType("guest")}>Guest</button>

      {/* <hr /> */}

      
      <h3>Current Role: {userType}</h3>
    
      {userType === "admin" && <AdminDashboard />}
      {userType === "manager" && <ManagerDashboard />}
      {userType === "user" && <UserDashboard />}
      {userType === "guest" && <GuestDashboard />}
    </div>
  );
}

export default UserDashboards;