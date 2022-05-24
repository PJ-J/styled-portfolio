import React from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'
import config from "../config/particlesjs-config.js"
// import configLight from '../config/particlesjs-config-light.json'

// const Box = styled.div`
// position: absolute;
// top: 0;
// right: 0;
// left: 0;
// bottom: 0;
// z-index: 0;
// `

const ParticleComponent = () => {

   return (
    // <Box>
     <Particles options={config}></Particles>
    // </Box>
  )
}

export default ParticleComponent