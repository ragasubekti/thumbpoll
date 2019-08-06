/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";

import { Redirect } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { css, jsx } from "@emotion/core";

import { GradientKeyframes } from "pages/Home";

import firebase from "../../fire";

const FormGroup = styled.div`
  margin: 20px 0;

  label {
    display: block;
  }
`;

const FormInput = styled(Field)`
  border: 1.5px solid #ccc;
  background: #fefefe;
  font-size: 1rem;
  margin: 10px 0;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const AuthButton = styled.button`
  background: #e71d36;
  padding: 1rem 1.5rem;
  color: #fdfffc;
  border-radius: 5px;
  border: none;
  font-size: 0.9rem;
  width: 100%;
  font-weight: bold;
  transition: 0.25s;
  &:hover {
    transition: 0.25s;
    background: #ff9f1c;
  }
`;

const GoogleAuthButton = styled(AuthButton)`
  background: #fff;
  color: #333;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease;

  &:hover {
    transition: 0.5s;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    color: #fff;
    background-size: 400% 400%;

    -webkit-animation: ${GradientKeyframes} 10s ease infinite;
    -moz-animation: ${GradientKeyframes} 10s ease infinite;
    animation: ${GradientKeyframes} 10s ease infinite;
  }
`;

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
      .then(result => {
        alert("Woke");
      });

    this.setState({
      isLoggedIn: true
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
            </FormGroup>
          </Form>
        )}
      </Formik>
    );
  }
}

export default LoginForm;
