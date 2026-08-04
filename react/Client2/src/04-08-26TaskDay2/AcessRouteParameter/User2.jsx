import { useParams } from "react-router-dom"

function User() {
  const { id } = useParams();
  // console.log(useParams()) // Get the route parameter

  return (
    <div>
      <h2>User ID: {id}</h2>
    </div>
  )
}

export default User