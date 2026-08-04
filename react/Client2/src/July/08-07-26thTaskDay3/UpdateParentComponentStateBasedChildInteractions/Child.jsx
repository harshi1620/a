function Child({ updateMessage }) {
  return (
    <div>
      <button
        onClick={() => updateMessage("Hello from Child!")}
      >
        Send Message
      </button>
    </div>
  );
}

export default Child;