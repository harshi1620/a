import React, { Suspense } from 'react'
let Home = React.lazy(()=>import('./Home'))

function Loader() {
  return (
    <div>
      <h3>Lazy Loader!</h3>
      <Suspense fallback={<p>Loading...</p>}>
        <Home/>
      </Suspense>
    </div>
  )
}

export default Loader
