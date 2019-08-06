import React from 'react'
import styled from '@emotion/styled'

import { Link } from "react-router-dom"

import {Logo as BaseLogo} from "pages/Home"

const Navbar = styled.div`
  background: #1D3557;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Logo = styled(BaseLogo)`
  font-size: 2rem;
`

const Logout = styled(Link)`
  color: #fff;
  font-weight: 800;
  text-decoration: none; 
`

const Container = styled.div`
  margin: 2rem;
`

const ActionButton = styled.button`
  padding: 0.75rem 1rem;
  background: #00A8E8;
  color: #fcfcfc;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Logo />
           <div>
             <span>Raga Subekti</span> | <Logout to="/logout">Logout</Logout>
           </div>
        </Navbar>
        <Container>
          <ActionButton onClick={() => {}}>Add Poll</ActionButton>

          <div>



          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Dashboard
