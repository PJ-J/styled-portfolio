import React from 'react'
import styled from 'styled-components'
import { lightTheme, darkTheme } from '../components/Themes'
import Name from '../assets/Images/PJ_logo.png'

const Logo = styled.div`
display: flex;
color: #534582;
${'' /* font-family: 'Nasir Udin', serif; */}

height: 5rem;
position: fixed;
left: .5rem;
top: 1rem;
z-index: 3;

`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <img src={Name} />
    </Logo>

  )
}

export default LogoComponent