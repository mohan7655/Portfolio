import React from "react";
import { FormContainer, FormGroup } from "./Contact";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("xqayrwkk");
  if (state.succeeded) {
    return <p>Thank you for your message. I will get back to you soon.</p>;
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="">Name</label>
        <input type="text" name="name" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Message</label>
        <textarea type="text" name="content" placeholder="Write here.." />
      </FormGroup>
      <button type="submit">Submit</button>
    </FormContainer>
  );
};
export default Form;
