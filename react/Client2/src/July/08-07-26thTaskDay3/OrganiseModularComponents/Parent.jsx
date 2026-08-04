import Header from "./Header";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Header />
      <h2>Parent Component</h2>

      <Child name="John" />
      <Child name="Alice" />
    </div>
  );
}

export default Parent;