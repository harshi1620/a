 import React, {use, useEffect, useState } from 'react'
 import { useSelector } from 'react-redux'
 
 function A1() {
  let[a,seta] = useState([])

    useEffect(()=>{
      console.log(a)
    },[a])
    useEffect(()=>{
        console.log("Hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=> d.json())
        .then((d)=>
            // console.log(d)
        seta(d)
            // console.log(typeof(d))
        )
    },[])
    // console.log(a[0])
    // console.log(a[0].title)
   return (
     <div>
       A1
       {/* {a} */}
      {/* <h1>{a[1]?.title}</h1>
      <h3>{a[1]?.id}</h3> 
      <h2>{a[1]?.userId}</h2>
       <h1>{a[2]?.title}</h1>
      <h3>{a[2]?.id}</h3> 
      <h2>{a[2]?.userId}</h2>
        */}
       {a.map((b)=>{
          return( 
          <div key={b.id}>
        {/* <h1> conso</h1> */}
        {/* {console.log(b)} */}
        <h1>{b.title}</h1>
       <h3>{b.id}</h3>
        </div>)

       })}
       

       <button onClick={()=>seta(a+1)}>change</button>
     </div>
   )
 }
 
 export default A1
 