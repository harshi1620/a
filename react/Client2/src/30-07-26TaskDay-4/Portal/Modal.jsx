import React, { useState } from "react"
import ReactDOM from "react-dom"

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>React Portal</h2>
        <p>This modal is rendered using ReactDOM.createPortal().</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body // Portal target
  )
}

export default function Modal2() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portal Example</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}