import React, { useContext } from "react";
import { ThemeContext } from "./Theme";


function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setTheme(theme === "Light" ? "Dark" : "Light")
      }
    >
      Change Theme from footer
    </button>
  );
}

export default Footer;