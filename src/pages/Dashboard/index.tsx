import React from 'react'
import styled from '@emotion/styled'

import { Link } from 'react-router-dom'

import { Logo as BaseLogo } from 'pages/Home'

import firebase from 'fire'

const Navbar = styled.div`
  background: #1d3557;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(BaseLogo)`
  font-size: 2rem;
`

const Logout = styled.button`
  padding: 1rem;
  border: none;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
`

const Container = styled.div`
  margin: 2rem;
`

const ActionButton = styled.button`
  padding: 0.75rem 1rem;
  background: #00a8e8;
  color: #fcfcfc;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`

class Dashboard extends React.Component {
  state = {
    isLogoutProccessed: false
  }

  handleLogout = () => {
    const self = this
    firebase
      .auth()
      .signOut()
      .then(() => {
        self.setState({
          isLogoutProccessed: true
        })
      })
  }

  render() {
    return this.state.isLogoutProccessed ? (
      <Redirect to="/" />
    ) : (
      <React.Fragment>
        <Navbar>
          <Logo />
          <div>
            <span>Raga Subekti</span> |{' '}
            <Logout onClick={this.handleLogout}>Logout</Logout>
          </div>
        </Navbar>
        <Container>
          <ActionButton onClick={() => {}}>Add Poll</ActionButton>
        </Container>
      </React.Fragment>
    )
  }
}

export default Dashboard
