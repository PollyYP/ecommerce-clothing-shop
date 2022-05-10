import React from "react";

import SignInForm from "../components/sign-in";
import SignUpForm from "../components/sign-up";

import "../styles/sign-in-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default SignInAndSignUpPage;
