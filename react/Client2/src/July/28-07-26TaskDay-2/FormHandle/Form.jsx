import React from "react";
import useForm from "./UseForm";

function Form() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
  });

  return (
    <>
      <h2>Registration Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={values.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
      />

      <br /><br />

      <h3>Entered Details</h3>
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
    </>
  );
}

export default Form;