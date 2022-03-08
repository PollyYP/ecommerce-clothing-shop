import React, { useState } from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { signInWithGoogle } from "../firebase/firebase.utils";

import "../styles/sign-in.styles.scss";

const initialFormValue = {
  email: "",
  password: "",
};

function SignIn() {
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormValue({ email: "", password: "" });
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={formValue.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
