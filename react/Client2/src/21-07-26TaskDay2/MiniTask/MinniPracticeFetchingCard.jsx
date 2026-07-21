import { useState, useEffect } from "react";

function FetchingCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
  card: {
    width: "250px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
};

export default FetchingCard;