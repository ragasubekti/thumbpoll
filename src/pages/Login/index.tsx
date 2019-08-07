import React from "react";
import styled from "@emotion/styled";

import { Redirect } from "react-router-dom";

import { PageWrapper as BasePageWrapper, Logo as BaseLogo } from "pages/Home";
import LoginForm from "./LoginForm";

import firebase from "fire";

export const PageWrapper = styled(BasePageWrapper)`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
    padding: 0;
  }
`;

export const AuthCard = styled.div`
  background: #fefefe;
  color: #333;
  padding: 2rem;
  border-radius: 5px;
  transition: 1s ease-out;

  @media (min-width: 1024px) {
    width: 550px;
  }

  @media (max-width: 1024px) {
    transition: 1s ease-out;
    min-height: 100vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    border-radius: 0;
  }
`;

export const Logo = styled(BaseLogo)`
  font-size: 3rem;
`;

export default class Login extends React.Component {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    const self = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        alert("Udah Login Cuy!");
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
          <h2>Please login to continue</h2>
          <LoginForm />
        </AuthCard>
      </PageWrapper>
    );
  }
}
