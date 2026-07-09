import React, { createContext, useState } from "react";
import ObjectConsumer1 from "./ObjectConsumer1";
import ObjectConsumer2 from "./ObjectConsumer2";

export let UserContext = createContext()

function App() {
  const [user] = useState({
    name: "harshitha",
    email: "Harshitha@example.com"
  });

  return (
    <UserContext.Provider value={user}>
        <ObjectConsumer1/>
        <ObjectConsumer2/>
    </UserContext.Provider>
  );
}

export default App;