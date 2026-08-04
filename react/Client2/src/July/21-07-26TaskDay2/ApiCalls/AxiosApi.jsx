import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosApi() {
    let [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <h2>Fetched(Axios) Data</h2>
      {
        data.map(user=>(
            <p key={user.id}>{user.name}-{user.website}</p>
        ))
      }
    </div>
  )
}

export default AxiosApi
