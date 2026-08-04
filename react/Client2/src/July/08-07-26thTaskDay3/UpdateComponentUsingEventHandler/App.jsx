import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Update State Using Event Handler</h2>

      <p>Count: {count}</p>

      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default App;