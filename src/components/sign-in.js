import React, { useState } from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { signInWithGooglePopup } from "../firebase/firebase.utils";
import { createUserProfileDocument } from "../firebase/firebase.utils";

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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserProfileDocument(user);
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
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton buttonType="google" onClick={logGoogleUser}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
