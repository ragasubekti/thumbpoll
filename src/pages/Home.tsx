import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "react-router-dom";

export const Logo = styled.div`
  font-weight: 800;
  font-size: 2rem;
  background: #de6161;
  background: -webkit-linear-gradient(to right, #de6161, #2657eb);
  background: linear-gradient(to right, #de6161, #2657eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ::after {
    content: "thumbpoll";
  }
`;

export const LogoWhite = styled.div`
  font-weight: 800;
  font-size: 6rem;
  color: #fff;

  ::after {
    content: "thumbpoll";
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const GradientKeyframes = keyframes`
  0% {
      background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

export const PageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: ${GradientKeyframes} 20s ease infinite;
  -moz-animation: ${GradientKeyframes} 20s ease infinite;
  animation: ${GradientKeyframes} 20s ease infinite;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 3rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const GetStarted = styled(Link)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  border-radius: 10px;
  min-width: 0;
  transition: 0.5s ease-in-out;

  &:hover {
    transition: 0.5s ease-in-out;
    background: #fff;
    color: #333;
  }
`;

export default () => (
  <PageWrapper>
    <LogoWhite />
    <Subtitle>Let's poll with our thumb!</Subtitle>
    <div style={{ margin: "3rem 0" }}>
      <GetStarted to="/user/login">Get Started</GetStarted>
    </div>
  </PageWrapper>
);
