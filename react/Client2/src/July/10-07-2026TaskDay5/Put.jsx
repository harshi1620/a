import { useState } from "react";

function F1() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const updateData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Data:", data);
      });
  };

  return (
    <div>
      <h2>Update User</h2>

      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default F1;
