import React from "react";
import useFetch from "./UseFetch";

function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Users;