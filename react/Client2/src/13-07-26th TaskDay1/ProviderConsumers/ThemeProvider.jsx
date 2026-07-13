import { createContext, useState } from "react"
import ThemeSwitcher from "./ThemeConsumer"

// Create Context
export const ThemeContext = createContext()

// Provider Component
function ThemeProvider() {
  const [theme, setTheme] = useState("Light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeSwitcher/>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider