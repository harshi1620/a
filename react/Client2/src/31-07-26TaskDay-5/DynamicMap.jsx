function DynamicMap() {
  const users = [
    { id: 1, name: "Sam" },
    { id: 2, name: "jack" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default DynamicMap