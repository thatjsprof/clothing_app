import React, { Component } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirm_password } = this.state;

    if (password !== confirm_password) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirm_password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Name"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="confirm_password"
            label="Confirm Password"
            type="password"
            value={confirm_password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
