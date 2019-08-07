/** @jsx jsx */

import React from "react";

import { Redirect } from "react-router-dom";
import { css, jsx } from "@emotion/core";

import RegisterForm from "./RegisterForm";

import { PageWrapper, AuthCard, Logo } from "pages/Login";

import firebase from "fire";

export default class Login extends React.Component {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    const self = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.setState({
          isAuthorized: true
        });
      }
    });
  }

  render() {
    return this.state.isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <PageWrapper>
        <AuthCard>
          <Logo />
          <h2
            css={css`
              font-weight: bold;
            `}
          >
            Register a new account
          </h2>

          <RegisterForm />
        </AuthCard>
      </PageWrapper>
    );
  }
}
