import React from 'react'

function ObjectDestructuring() {
const student = {
  name: "John",
  age: 20,
  course: "React"
};

const { name, age, course } = student;

console.log(name);   // John
console.log(age);    // 20
console.log(course); // React
  return (
    <div>
      
    </div>
  )
}

export default ObjectDestructuring