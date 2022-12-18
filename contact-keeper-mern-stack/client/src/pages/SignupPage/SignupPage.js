import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignupPage.css"

const SignupPage = () => {
  const onSignupSubmit = (value) => {
    console.log(`Submit form on SignupPage`, {value});
  }
  return (
  <div className="container">
    <div className="signup-container">
    <SignUpForm onSubmit = {onSignupSubmit}/>
    </div>
  </div>
  )
};

export default SignupPage;
