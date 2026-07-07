import React from 'react'
import ReusableComponetCompositon from './ReusableComponetCompositon'

function Card() {
  return (
    <div>
      <h1>Reusable Card example</h1>
      <ReusableComponetCompositon title='React' desc='react is used for building ui'/>
      <ReusableComponetCompositon title='Javascript' desc='javascript is used for web development'/>
      <ReusableComponetCompositon title='css' desc='css is used for styling for web paages'/>
    </div>
  )
}

export default Card
