import React, { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
export let ThemeContext = createContext()

function Theme() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default Theme;