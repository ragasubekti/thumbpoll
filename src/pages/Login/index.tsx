import React from "react";
import styled from "@emotion/styled";

import { PageWrapper as BasePageWrapper, Logo as BaseLogo } from "pages/Home";
import LoginForm from "./LoginForm";

const PageWrapper = styled(BasePageWrapper)`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
    padding: 0;
  }
`;

const AuthCard = styled.div`
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
    justify-content: center;
    border-radius: 0;
  }
`;

const Logo = styled(BaseLogo)`
  font-size: 3rem;
`;

export default class Login extends React.Component {
  render() {
    return (
      <PageWrapper>
        <AuthCard>
          <Logo />

          <LoginForm />
        </AuthCard>
      </PageWrapper>
    );
  }
}
