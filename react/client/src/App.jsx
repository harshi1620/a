import React from 'react'
import One from './FunctionalComponents/One'
// import A from './FunctionalComponents/Props/A' 
import B from './FunctionalComponents/Props/B'
import C from './FunctionalComponents/Props/C'
import Parent from './FunctionalComponents/Props/ChildToChild/Parent'
// import A from './FunctionalComponents/globalState/contextApi/A'
// import Child from './FunctionalComponents/Props/parentTochild/Child'
// import A from './FunctionalComponents/Props/childs/A'
// import A from './FunctionalComponents/dummy/A' 
// import A from './FunctionalComponents/Props/Props1/A'
// import A from './FunctionalComponents/localState/useState/B'
import  store  from './FunctionalComponents/globalState/toolkit/app'
import { Provider } from 'react-redux'
// import A from './FunctionalComponents/globalState/contextApi/A'
// import A from './FunctionalComponents/data/A'
// import A from './FunctionalComponents/localState/useReducer/useReducer/A'
import Profile from './FunctionalComponents/condentionalRendering/Profile'
import Login from './FunctionalComponents/condentionalRendering/Login'
import Signup from './FunctionalComponents/condentionalRendering/Signup'
// import A1 from './FunctionalComponents/condentionalRendering/useEffect/A1'
import A2 from './FunctionalComponents/Layout/HigherOrderComponents/A2'
import B1 from './FunctionalComponents/Layout/HigherOrderComponents/B1'
import { useState } from 'react'
import Header from './FunctionalComponents/Layout/HigherOrderComponents/Header'
import Footer from './FunctionalComponents/Layout/HigherOrderComponents/Footer'
import Layout from './FunctionalComponents/Layout/HigherOrderComponents/Layout'

 function App() {
        let[state,setState]=useState(true)

      return (
        <>
       <Provider store={store}>
        
          <button onClick={()=>setState(!state)}>click</button>
          <Header/>
          <Layout> 
            <A2/>
          </Layout>
          {state?<A2/>: <B1/>}
          <Footer/>
          {/* <A2/> */}
           {/* <B1/> */}
        {/* <Profile/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
      {/* <A1/> */}
        </Provider>
        </>
      )  
    }
  export default App







  // https://jsonplaceholder.typicode.com/posts


  // https://jsonplaceholder.typicode.com/posts/1

  // https://jsonplaceholder.typicode.com/comments
    
