import { useState } from "react"

function ExampleConcept() {
  // State
  const [count, setCount] = useState(0)

  // Variable
  const name = "Home"

  // List
  const fruits = ["Orange", "Banana", "Mango"]

  // Function
  function sayHello() {
    alert("Hello!")
  }

  return (
    <div>
      {/* JSX */}
      <h2>Welcome to {name}</h2>

      {/* Event Handling + useState */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      {/* Event Handling */}
      <button onClick={sayHello}>
        Say Hello
      </button>

      <br /><br />

      {/* Conditional Rendering */}
      {count >= 5 ? <p>Count is High</p> : <p>Count is Low</p>}

      {/* List Rendering */}
      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Form */}
      <input type="text" placeholder="Enter your name" />
    </div>
  )
}

export default ExampleConcept