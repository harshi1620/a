import React, { useContext } from "react";
import{UserContext} from "./App";

function Profile() {
  const user = useContext(UserContext);


  return (
    <div>
      <h3>Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;