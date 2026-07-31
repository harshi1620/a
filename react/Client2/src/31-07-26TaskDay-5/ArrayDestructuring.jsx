import React from 'react'

function ArrayDestructuring() {
    let a = [10,20,30,40]    
    console.log(a)
    let [a10,b20,c30,d40] = a
    console.log(a10) //destructured

    const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first) 
console.log(third) 


  return (
    <div>
      <h4>Array destructred on console</h4>
    </div>
  )
}

export default ArrayDestructuring
