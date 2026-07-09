import React, { createContext, useState } from "react";
import Parent from "./Parent";
export let UserContext = createContext()

function App() {
  const [user] = useState({
    name: "Harshitha",
    email: "Harshitha@example.com"
  });

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;