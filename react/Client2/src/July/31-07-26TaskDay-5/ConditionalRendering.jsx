function ConditionalRendering() {
  const products = [
    { id: 1, name: "Laptop", available: true },
    { id: 2, name: "Keyboard", available: false },
    { id: 3, name: "Mouse", available: true },
  ]

  return (
    <ul>
        <h3>Product names</h3>
      {products.map((product) =>
        product.available ? (
          <li key={product.id}>{product.name}</li>
        ) : null
      )}
    </ul>
  )
}

export default ConditionalRendering