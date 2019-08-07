/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";

import { Redirect, Link as BaseLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { css, jsx } from "@emotion/core";
import * as Yup from "yup";

import {AuthButton, ErrorMessageComponent, FormGroup, FormInput, GoogleAuthButton, Link} from "pages/Login/styled";

import firebase from "fire";

const RegisterFormSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string().required("Password is required").min(8, "Minimal password length is 8 characters")
});

// const ErrorMessageStyled =

class RegisterForm extends React.Component {
  state = {
    form: {
      fullName: "",
      email: "",
      password: "",
    },
    errorMessage: '',
    isLoggedIn: false
  };

  handleRegister = (value: {email: string, password: string, fullName: string}) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((result) => {
      result.user.updateProfile({
        displayName: value.fullName
      }).then(() => {
        alert(`Successfully Registered ${value.email}`)
      });

    }).catch((e) => {
      this.setState({errorMessage: e.message})
    })
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
        onSubmit={this.handleRegister}
        validationSchema={RegisterFormSchema}
      >
        {({errors, touched}) => (
          <Form>
            {this.state.errorMessage.length > 0 && <div>{this.state.errorMessage}</div>}
            <FormGroup>
              <label>Full Name</label>
              <FormInput placeholder="Full Name" name="fullName" type="text" className={touched.fullName && errors.fullName ? "isError" : ""}/>
              <ErrorMessage name="fullName" component={ErrorMessageComponent}/>
            </FormGroup>
            <FormGroup>
              <label>Email Address</label>
              <FormInput
                placeholder="Email Address"
                name="email"
                type="email"
                className={touched.email && errors.email ? "isError" : ""}
              />
              <ErrorMessage name="email" component={ErrorMessageComponent}/>
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <FormInput
                placeholder="Password"
                name="password"
                type="password"
                className={touched.password && errors.password ? "isError" : ""}
              />
              <ErrorMessage name="password" component={ErrorMessageComponent}/>
            </FormGroup>
            <FormGroup>
              <AuthButton type="submit">Register</AuthButton>
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
                Register with Google
              </GoogleAuthButton>

              <div
                css={css`
                  margin: 20px 10px;
                  height: 1px;
                  background: #ccc;
                `}
              />

              <Link to="/user/register">Login with existing account</Link>
            </FormGroup>
          </Form>
        )}
      </Formik>
    );
  }
}

export default RegisterForm;
