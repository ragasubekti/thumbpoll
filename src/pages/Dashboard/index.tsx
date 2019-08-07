import React from "react";
import styled from "@emotion/styled";

import { Redirect } from "react-router-dom";

import { Logo as BaseLogo } from "pages/Home";

import firebase from "fire";

const Navbar = styled.div`
  background: #1d3557;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled(BaseLogo)`
  font-size: 2rem;
`;

const Logout = styled.button`
  padding: 0;
  border: none;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  background: transparent;
  font-family: "Montserrat";
  font-size: 1rem;
`;

const Container = styled.div`
  margin: 2rem;
`;

const ActionButton = styled.button`
  padding: 0.75rem 1rem;
  background: #00a8e8;
  color: #fcfcfc;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

class Dashboard extends React.Component {
  state = {
    isLogoutProccessed: false,
    profile: {
      displayName: ""
    }
  };

  componentDidMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ profile: user })
        : this.setState({ profile: {}, isLogoutProccessed: true });

      console.log(user ? user.displayName : "");
    });
  }

  handleLogout = () => {
    console.log("Runs!");
    const self = this;
    firebase
      .auth()
      .signOut()
      .then(() => {
        self.setState({
          isLogoutProccessed: true
        });
      });
  };

  render() {
    return this.state.isLogoutProccessed ? (
      <Redirect to="/" />
    ) : (
      <React.Fragment>
        <Navbar>
          <Logo />
          <div>
            <span>
              {this.state.profile ? this.state.profile.displayName : ""}
            </span>{" "}
            | <Logout onClick={this.handleLogout}>Logout</Logout>
          </div>
        </Navbar>
        <Container>
          <ActionButton onClick={() => {}}>Add Poll</ActionButton>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
