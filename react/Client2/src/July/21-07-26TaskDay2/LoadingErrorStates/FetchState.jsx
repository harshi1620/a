import React, { useEffect, useState } from 'react'

function FetchState() {
    let [post,setPost] = useState('')
    let [loading,setLoading] = useState(true)
    let [err,setErr] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if(!res.ok){
                throw new Error ('Request failed')
            }
            return res.json()
        })
        .then(res=>{
            setPost(res)
            setLoading(false)
        })
        .catch(err=>{
            setErr(err.message)
            setLoading(false)
        })
    },[])

    if(loading) return <h3>Loading...</h3>
    if(err) return <h3>{err}</h3>
  return (
    <div>
      {
        post.map(posts=>(
            <p key={posts.id}>{posts.title}</p>
        ))
      }
    </div>
  )
}

export default FetchState
