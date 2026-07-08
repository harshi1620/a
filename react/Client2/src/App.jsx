import { useState } from 'react'
import './App.css'
import Parent from './08-07-26thTaskDay3/DisplayReceivedData/Parent'
import Parent2 from './08-07-26thTaskDay3/ComponentHieratchy/Parent'
import Parent3 from './08-07-26thTaskDay3/ComponentsUseBothPropsState/Parent'
// import Parent4 from './08-07-26thTaskDay3/ImplementCommunicationSharingBetweenSibling/Parent'
import Parent5 from './08-07-26thTaskDay3/MultipleParentChildComponents/Parent1'
import Parent6 from './08-07-26thTaskDay3/MultipleParentChildComponents/Parent2'
import Parent7 from './08-07-26thTaskDay3/NestMultipleChildComponents/Parent'
import Parent8 from './08-07-26thTaskDay3/OrganiseModularComponents/Parent'
import Parent9 from './08-07-26thTaskDay3/PassDataChildToAnotherParentAsIntermediary/Parent'
import Parent10 from './08-07-26thTaskDay3/PassDataFromChildToParentUsingCallback/Parent'
import Parent11 from './08-07-26thTaskDay3/PassDifferentTypeOfDataUsingProps/Parent'
import Parent12 from './08-07-26thTaskDay3/RenderDynamicDataPropsState/Parent'
import Parent13 from './08-07-26thTaskDay3/ReuseChildComponentWithDifferentProps/Parent'
import Parent14 from './08-07-26thTaskDay3/SendDataChildToParentUsingButtonClicks/Parent'
// import Parent15 from './08-07-26thTaskDay3/StateLifting/Parent'
import Parent16 from './08-07-26thTaskDay3/UpdateComponentUsingEventHandler/App'
import Parent17 from './08-07-26thTaskDay3/UpdateParentComponentStateBasedChildInteractions/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parent/>
    <Parent2/>
    <Parent3/>
    {/* <Parent4/> */}
    <Parent5/>
    <Parent6/>
    <Parent7/>
    <Parent8/>
    <Parent9/>
    <Parent10/>
    <Parent11/>
    <Parent12/>
    <Parent13/>
    <Parent14/>
    {/* <Parent15/> */}
    <Parent16/>
    <Parent17/>
    </>
  
  )
}

export default App
