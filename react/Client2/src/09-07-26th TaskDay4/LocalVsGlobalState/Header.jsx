import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Header() {
  const { theme } = useContext(ThemeContext);

  return <h2>Header Theme: {theme}</h2>;
}

export default Header;