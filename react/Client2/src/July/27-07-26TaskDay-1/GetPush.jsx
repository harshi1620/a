import React from "react"
import axios from "axios"

const API = "https://jsonplaceholder.typicode.com/posts"

function GetPush() {
  // ==========================
  // FETCH API
  // ==========================

  // GET
  const fetchGet = async () => {
    try {
      const response = await fetch(`${API}?_limit=2`)

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }

      const data = await response.json()
      console.log("Fetch GET:", data)
    } catch (error) {
      console.error(error)
    }
  }

  // POST
  const fetchPost = async () => {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "React Fetch Post",
        body: "Hello React",
        userId: 1,
      }),
    })

    const data = await response.json()
    console.log("Fetch POST:", data)
  }

  // PUT
  const fetchPut = async () => {
    const response = await fetch(`${API}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      }),
    })

    console.log("Fetch PUT:", await response.json())
  }

  // PATCH
  const fetchPatch = async () => {
    const response = await fetch(`${API}/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Patched Title",
      }),
    })

    console.log("Fetch PATCH:", await response.json())
  }

  // DELETE
  const fetchDelete = async () => {
    const response = await fetch(`${API}/1`, {
      method: "DELETE",
    })

    console.log("Fetch DELETE Status:", response.status)
  }

  // ==========================
  // AXIOS
  // ==========================

  // GET
  const axiosGet = async () => {
    try {
      const response = await axios.get(API, {
        params: {
          _limit: 2,
        },
      })

      console.log("Axios GET:", response.data)
    } catch (error) {
      console.error(error);
    }
  }

  // POST
  const axiosPost = async () => {
    const response = await axios.post(API, {
      title: "Axios Post",
      body: "Hello React",
      userId: 1,
    })

    console.log("Axios POST:", response.data)
  }

  // PUT
  const axiosPut = async () => {
    const response = await axios.put(`${API}/1`, {
      title: "Updated Title",
      body: "Updated Body",
      userId: 1,
    })

    console.log("Axios PUT:", response.data)
  }

  // PATCH
  const axiosPatch = async () => {
    const response = await axios.patch(`${API}/1`, {
      title: "Patched Title",
    })

    console.log("Axios PATCH:", response.data)
  }

  // DELETE
  const axiosDelete = async () => {
    const response = await axios.delete(`${API}/1`)

    console.log("Axios DELETE:", response.status)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>React API Calls</h2>

      <h3>Fetch API</h3>
      <button onClick={fetchGet}>GET</button>
      <button onClick={fetchPost}>POST</button>
      <button onClick={fetchPut}>PUT</button>
      <button onClick={fetchPatch}>PATCH</button>
      <button onClick={fetchDelete}>DELETE</button>

      <hr />

      <h3>Axios</h3>
      <button onClick={axiosGet}>GET</button>
      <button onClick={axiosPost}>POST</button>
      <button onClick={axiosPut}>PUT</button>
      <button onClick={axiosPatch}>PATCH</button>
      <button onClick={axiosDelete}>DELETE</button>
    </div>
  )
}

export default GetPush