import { useLocation } from "react-router-dom"

function Profile() {
  const location = useLocation()
  console.log(location)
  const { name, age } = location.state

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Profile