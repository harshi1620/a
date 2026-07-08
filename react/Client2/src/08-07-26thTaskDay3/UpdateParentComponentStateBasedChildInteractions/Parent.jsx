import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("No message received");

  const updateMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <p>{message}</p>

      <Child updateMessage={updateMessage} />
    </div>
  );
}

export default Parent;