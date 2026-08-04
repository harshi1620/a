function Child({ sendData }) {
  return (
    <div>
      <button onClick={() => sendData("Hello Parent!")}>
        Send Message
      </button>
    </div>
  );
}

export default Child;