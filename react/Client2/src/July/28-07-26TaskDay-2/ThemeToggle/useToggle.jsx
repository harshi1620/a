import React, { useState } from 'react'

function useToggle() {
    let [theme,setTheme] = useState("light")
    let toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return {theme,toggleTheme}
}

export default useToggle
