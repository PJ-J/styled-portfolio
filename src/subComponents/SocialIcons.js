import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github } from '../components/AllSvgs'
import styled from 'styled-components'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 10%;
left: 2rem;

z-index:3`

const SocialIcons = () => {
  return (
    <Icons>
    <div>
      <NavLink to='/'>
        <Github width={25} height={25} fill='currentColor' />        
      </NavLink>
    </div>
    </Icons>
  )
}

export default SocialIcons