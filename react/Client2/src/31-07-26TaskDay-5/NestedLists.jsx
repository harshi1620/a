function NestedLists() {
  const departments = [
    {
      id: "d1",
      name: "Engineering",
      employees: [
        { id: "e1", name: "soma" },
        { id: "e2", name: "Balu" },
      ],
    },
    {
      id: "d2",
      name: "Marketing",
      employees: [
        { id: "e3", name: "Charitha" },
        { id: "e4", name: "Diana" },
      ],
    },
  ]

  return (
    <div>
      {departments.map((department) => (
        <section key={department.id}>
          <h2>{department.name}</h2>

          <ul>
            {department.employees.map((employee) => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default NestedLists