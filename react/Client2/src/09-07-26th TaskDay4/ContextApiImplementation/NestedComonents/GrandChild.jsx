import React, { useContext } from "react";
import {UserContext} from "./App";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default GrandChild;