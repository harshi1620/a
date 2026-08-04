import axios from "axios";

function A() {
  const getUsers = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(res.data);
  };

  const addUser = async () => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: "harshi",
      }
    );
    console.log(res.data);
  };

  const updateUser = async () => {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        name: "soumya",
      }
    );
    console.log(res.data);
  };

  const patchUser = async () => {
    const res = await axios.patch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        name: "Sam",
      }
    );
    console.log(res.data);
  };

  const deleteUser = async () => {
    await axios.delete(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("Deleted Successfully");
  };

  return (
    <div>
      <h2>Axios CRUD Operations</h2>

      <button onClick={getUsers}>GET</button>
      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>
    </div>
  );
}

export default A;