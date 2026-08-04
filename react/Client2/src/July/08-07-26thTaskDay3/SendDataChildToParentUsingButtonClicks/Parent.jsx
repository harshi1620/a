import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  const receiveMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <p>Message from Child: {message}</p>

      <Child sendData={receiveMessage} />
    </div>
  );
}

export default Parent;