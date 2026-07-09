// App.js
import React, { createContext, useState } from "react";
import Home from "./Home";
export let ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;