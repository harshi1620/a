import React from 'react'
import useToggle from './useToggle'

function Theme() {
    let {theme,toggleTheme} = useToggle()
    let styles = {
        backgroundColor: theme ==='light' ? 'white':'black',
        color:theme==='light'?'black':'white',
        padding:'20px',
        height:'100px'
    }
  return (
    <div style={styles}>
      <h2>Theme</h2>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  )
}

export default Theme
