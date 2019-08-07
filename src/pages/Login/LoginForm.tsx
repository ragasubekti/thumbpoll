/** @jsx jsx */

import React from "react";

import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { css, jsx } from "@emotion/core";

import firebase from "fire";
import {AuthButton, FormGroup, FormInput, GoogleAuthButton, Link} from "pages/Login/styled";

class LoginForm extends React.Component {
  state = {
    form: {
      email: "",
      password: ""
    },
    isLoggedIn: false
  };

  handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        this.setState({
          isLoggedIn: true
        });
      });
  };

  render() {
    return this.state.isLoggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Formik
        initialValues={this.state.form}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <FormGroup>
              <label>Email Address</label>
              <FormInput
                placeholder="Email Address"
                name="email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <FormInput
                placeholder="Password"
                name="password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <AuthButton>Continue</AuthButton>
              <div
                css={css`
                  text-align: center;
                  margin: 1rem;
                  color: #ccc;
                `}
              >
                or
              </div>
              <GoogleAuthButton type="button" onClick={this.handleGoogleLogin}>
                <img
                  src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.31/static/media/google-logo.c21ca9d1.svg"
                  css={css`
                    width: 20px;
                    margin-right: 10px;
                  `}
                />
                Login with Google
              </GoogleAuthButton>

              <div
                css={css`
                  margin: 20px 10px;
                  height: 1px;
                  background: #ccc;
                `}
              />

              <Link to="/user/register">Create a new account</Link>
            </FormGroup>
          </Form>
        )}
      </Formik>
    );
  }
}

export default LoginForm;
