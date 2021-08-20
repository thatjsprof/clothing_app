import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";
import { compose } from "redux";

function SignIn({ googleSignInStart, emailSignInStart }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={credentials.email}
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={credentials.password}
          handleChange={handleChange}
          required
        ></FormInput>

        <Button type="submit">Submit Form</Button>
        <Button onClick={googleSignInStart} social>
          Sign with Google
        </Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const SignInComponent = compose(
  connect(null, mapDispatchToProps),
  withRouter
)(SignIn);

export default SignInComponent;
