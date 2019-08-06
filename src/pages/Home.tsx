import React from "react";
import styled from "@emotion/styled";

export const Logo = styled.div`
  font-weight: 800;
  font-size: 2rem;
  background: #de6161;
  background: -webkit-linear-gradient(to right, #de6161, #2657eb);
  background: linear-gradient(to right, #de6161, #2657eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default () => <h1>Hello World</h1>;
