 import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
 
 function A3(props) {
    let[data,setDtata]=useState([])
    let [errors,setErrors]=useState("")
    
    let fetchdata =()=>{
        fetch(props)
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((d)=>d.json)
    .then((d)=>setDtata(d))
    .catch((e)=>setErrors(e))
    
    }

    useEffect(()=>{
    fetchdata()
    },[])
    
   return {data,errors}
    
   
 }
 
 export default A3
 