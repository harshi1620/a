import React, { useEffect, useState } from 'react'

function FetchApi() {
    let [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res=>{
            setdata(res)
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <h2>Fetched data</h2>
      {
        data.map((user,index)=>(
            <p key={index}>{user.name} - {user.username}</p>
        ))
      }
    </div>
  )
}

export default FetchApi
