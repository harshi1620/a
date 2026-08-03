import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

function Router3() {
    
  return (
    <>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/about'>About</Link> | {" "}
            <Link to='/contact'>Contact</Link> | {" "}        
            <Link to='/services'>Services</Link>
         </nav>
         <hr />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
    </>
  )
}

export default Router3