import React from 'react'
import styled from 'styled-components'
import { lightTheme, darkTheme } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: #534582;
font-family: 'Helvetica Neue',sans-serif;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;

`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      PJ
    </Logo>

  )
}

export default LogoComponent