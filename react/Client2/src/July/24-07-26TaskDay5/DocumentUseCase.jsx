import { useState } from "react"

function DocumentUseCase() {
  const [products] = useState([
    "Laptop",
    "Mobile",
    "Headphones"
  ])

  return (
    <div>
      <h2>Product List</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  )
}

export default DocumentUseCase