import React, { useState } from "react"
import ReactDOM from "react-dom"

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.body)
}

export default function ToolTip() {
  const [showModal, setShowModal] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>React Portals Example</h2>

      {/* Modal */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Portal>
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ background: "#fff", padding: "20px" }}
            >
              <h3>Modal</h3>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </Portal>
      )}

      <br />
      <br />

      {/* Popup */}
      <button onClick={() => setShowPopup(!showPopup)}>Toggle Popup</button>

      {showPopup && (
        <Portal>
          <div
            style={{
              position: "fixed",
              top: "100px",
              right: "30px",
              background: "lightblue",
              padding: "10px",
              border: "1px solid black",
            }}
          >
            This is a Popup
          </div>
        </Portal>
      )}

      <br />
      <br />

      {/* Tooltip */}
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover Me
      </button>

      {showTooltip && (
        <Portal>
          <div
            style={{
              position: "fixed",
              top: "220px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "black",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            This is a Tooltip
          </div>
        </Portal>
      )}
    </div>
  )
}