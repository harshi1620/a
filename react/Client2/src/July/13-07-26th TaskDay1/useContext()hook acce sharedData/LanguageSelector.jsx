import { useContext } from "react"
import { LanguageContext } from "./LanguageProvider"

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <div>
      <h2>Selected Language: {language}</h2>

      <button onClick={() => setLanguage("English")}>
        English
      </button>&nbsp;&nbsp;

      <button onClick={() => setLanguage("Telugu")}>
        Telugu
      </button>&nbsp;&nbsp;

      <button onClick={() => setLanguage("Malayalam")}>
        Malayalam
      </button>
    </div>
  )
}

export default LanguageSelector