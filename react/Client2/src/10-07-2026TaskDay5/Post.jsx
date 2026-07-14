function App() {

  let addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Harshitha",
        email: "harshitha@gmail.com"
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
