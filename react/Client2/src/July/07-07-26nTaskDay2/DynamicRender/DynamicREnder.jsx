import React from 'react'

function DynamicREnder() {
    let products = [
        {id:1,name:'lap',price:999},
        {id:2,name:'mbl',price:200}
    ]
  return (
    <div>
      {
       products.map((item)=>(
        <div key={item.id}>
            {item.name} - {item.price}
        </div>
       ))
      }
    </div>
  )
}

export default DynamicREnder
