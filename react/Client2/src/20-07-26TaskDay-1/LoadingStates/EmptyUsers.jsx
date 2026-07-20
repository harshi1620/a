import React from "react";

function EmptyUsers() {
  const users = [];

  return (
    <div>
      {users.length === 0 ? (
        <h2>No Users Found</h2>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmptyUsers;