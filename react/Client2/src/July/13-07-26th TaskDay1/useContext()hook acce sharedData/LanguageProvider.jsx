import { createContext, useState } from "react"
import LanguageSelector from "./LanguageSelector"

// Create Context
export const LanguageContext = createContext()

function LanguageProvider() {
  const [language, setLanguage] = useState("English")

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <LanguageSelector/>
    </LanguageContext.Provider>
  )
}

export default LanguageProvider