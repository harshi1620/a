// Home.js
import React, { useContext } from "react";
import { ThemeContext } from "./App";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button
        onClick={() =>
          setTheme(theme === "Light" ? "Dark" : "Light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;