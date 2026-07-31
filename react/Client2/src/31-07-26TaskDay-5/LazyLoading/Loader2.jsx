import React, { Suspense, useState } from 'react'
let Home = React.lazy(()=>import('./Home'))
let About = React.lazy(()=>import('./About'))
function Loader2() {
    let [page,setPage]=useState('home')
  return (
    <div>
      <button onClick={()=>setPage('home')}>Home</button>&nbsp;&nbsp;
      <button onClick={()=>setPage('about')}>About</button>
      <Suspense fallback={<p>Loading...</p>}>
        {
            page === 'home' ? <Home/> : <About/>
        }
      </Suspense>
    </div>
  )
}

export default Loader2
