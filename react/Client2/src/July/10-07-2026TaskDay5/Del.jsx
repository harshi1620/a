function Delete() {
  let deleteUser = async () => {
    await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "DELETE",
      }
    );

    alert("User Deleted");
  };

  return (
    <div>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default Delete;