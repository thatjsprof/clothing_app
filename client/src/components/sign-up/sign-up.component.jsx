import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { displayName, email, password, confirm_password } = credentials;

    if (password !== confirm_password) {
      alert("Passwords don't match");
      return;
    }

    signUpStart(email, password, displayName);

    setCredentials({
      displayName: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          label="Name"
          type="text"
          value={credentials.displayName}
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={credentials.email}
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={credentials.password}
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="confirm_password"
          label="Confirm Password"
          type="password"
          value={credentials.confirm_password}
          handleChange={handleChange}
          required
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
