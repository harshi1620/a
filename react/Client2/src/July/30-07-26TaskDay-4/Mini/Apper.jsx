import React, { useState } from "react"
import ReactDOM from "react-dom"

function Modal({ closeModal }) {
  // Create portal container dynamically
  let modalRoot = document.getElementById("modal-root")

  if (!modalRoot) {
    modalRoot = document.createElement("div")
    modalRoot.id = "modal-root"
    document.body.appendChild(modalRoot)
  }

  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
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
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2>Modal Popup</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    modalRoot
  )
}

export default function Apper() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && <Modal closeModal={() => setShow(false)} />}
    </div>
  )
}