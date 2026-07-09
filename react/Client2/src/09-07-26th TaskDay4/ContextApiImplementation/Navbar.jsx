import React, { useContext } from "react";
import{UserContext} from "./App";

function Navbar() {
  const user = useContext(UserContext);
  console.log(user)

  return (
    <nav>
      <h2>Welcome, {user.name}</h2>
    </nav>
  );
}

export default Navbar;