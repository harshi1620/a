import React, { useContext } from "react";
import { UserContext } from "./App";


function Dashboard() {
  const user = useContext(UserContext);
  console.log(user)

  return (
    <div>
      <h3>Dashboard</h3>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;