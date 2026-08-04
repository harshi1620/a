import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

export let UserContext = createContext()
function App() {
  const [user] = useState({
    name: "Harshitha",
    email: "harsitha@example.com",
    role: "ASE"
  });

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Context API Example</h1>

        <Navbar />
        <Dashboard />
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;