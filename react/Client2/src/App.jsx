import { useState } from 'react'
import './App.css'
// import Card from './07-07-26nTaskDay2/Card'
import ValidInvalid from './07-07-26nTaskDay2/ValidAndInvalid/ValidInvalid'
import DynamicREnder from './07-07-26nTaskDay2/DynamicRender/DynamicREnder'
import DynamicDataProps from './07-07-26nTaskDay2/DynamicDataProps/DynamicDataProps'
import Mother from './07-07-26nTaskDay2/DataPassParentToChild/Mother'
import Parent from './07-07-26nTaskDay2/MultipleChilds/Parent'
import Card from './07-07-26nTaskDay2/ReusableComponents/Card'
import JSXExpression from './07-07-26nTaskDay2/JSXExpression/JSXExpression'
import DataFromParentToChild from './07-07-26nTaskDay2/DataFromParentToChild/DataFromParentToChild'
import AvoidUnecessary from './07-07-26nTaskDay2/AvoiduUnecessaryRendering/AvoidUnecessary'
import StateComponent from './07-07-26nTaskDay2/ComponentsUsingState/StateComponent'
import SiblingShareing from './07-07-26nTaskDay2/SiblingSharing/SiblingShareing'
import JSFunctions from './07-07-26nTaskDay2/JavascriptFunction/JSFunctions'
import UpdateUIState from './07-07-26nTaskDay2/UpdateUIUsingState/UpdateUIState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <ValidInvalid/>
      <DynamicREnder/>
      <DynamicDataProps/>
      <Mother/>
      <Parent/>
      <JSXExpression/>
      <DataFromParentToChild/>
      <AvoidUnecessary/>   
      <StateComponent/>
      <SiblingShareing/>
      <JSFunctions/>
      <UpdateUIState/>      
    </>
  )
}

export default App
