import styled from "@emotion/styled";
import {Field} from "formik";
import {GradientKeyframes} from "pages/Home";
import {Link as BaseLink} from "react-router-dom";

export const FormGroup = styled.div`
  margin: 20px 0;

  label {
    display: block;
  }
`;

export const FormInput = styled(Field)`
  border: 1.5px solid #ccc;
  background: #fefefe;
  font-size: 1rem;
  margin: 10px 0;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  
  &.isError {
    border-color: red;
  }
`;

export const AuthButton = styled.button`
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

export const GoogleAuthButton = styled(AuthButton)`
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

export const Link = styled(BaseLink)`
  color: #00a8e8;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  justify-content: center;
`;

export const ErrorMessageComponent = styled.div`
  color: red;
`;
