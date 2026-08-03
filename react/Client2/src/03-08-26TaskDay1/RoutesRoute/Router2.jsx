import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Router/Home'
import Contact from '../Router/Contact'
import About from '../Router/About'

function Router2() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Router2
