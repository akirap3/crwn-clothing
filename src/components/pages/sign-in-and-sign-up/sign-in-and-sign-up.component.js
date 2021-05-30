import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "./../../sign-in/sign-in.component";
import SignUp from "./../../sign-up/sign-up.component";

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOut;
