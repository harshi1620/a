import Child from "./Child" 

function Parent() {
  return (
    <div>
      <h1>Reuse Child Component</h1>

      <Child name="teju" age={22} />
      <Child name="Anil" age={20} />
      <Child name="Devi" age={25} />
    </div>
  )
}

export default Parent