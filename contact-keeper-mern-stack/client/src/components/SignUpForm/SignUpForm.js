import React from 'react'
import {useForm} from "react-hook-form";

import "./SignUpForm.css"

function SignUpForm(props) {
  const { onSubmit} = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return ( 
    <div className="signup-form-container">
      <p className="text-center display-5">Sign Up</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label" {...register("username", { required: true })}>Username</label>
          <input type="text" className="form-control" id="username" />
          {errors?.username && (
            <small className="text-danger">This field is required</small>)}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" {...register("email", { required: true })}>Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          {errors?.username && (
            <small className="text-danger">This field is required</small>)}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" {...register("password", { required: true })}>Password</label>
          <input type="password" className="form-control" id="password" />
          {errors?.username && (
            <small className="text-danger">This field is required</small>)}
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Agree to Terms and Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
        
  )
}

export default SignUpForm