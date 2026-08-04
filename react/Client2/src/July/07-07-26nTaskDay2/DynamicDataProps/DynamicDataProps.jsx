import React from 'react'

function Product({title,price}){
    return(
        <div>
            <h3>Title: {title}</h3>
            <p>Price: {price}</p>
        </div>
    )
}
function DynamicDataProps() {
  return (
    <div>
      <Product title='Mouse' price={200}/>
      <Product title='Keyboard' price={500}/>
    </div>
  )
}

export default DynamicDataProps
