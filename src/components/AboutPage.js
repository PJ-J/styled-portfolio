import React from "react";
import { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesBg from 'particles-bg'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100%;
  height: auto;
}
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(1px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  &:hover{
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    backdrop-filter: blur(1px);
    border: 2px solid ${(props) => props.theme.body};
    
  }
`



const AboutPage = () => {
  return (
    <div>
    
    <ThemeProvider theme={darkTheme}>
    
      <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton />
      <ParticlesBg color="black" type="lines" bg={true} />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
        I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
<br/><br/>
I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
<br/><br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
        
      </Box>
    </ThemeProvider>
    </div>
  );
};

export default AboutPage;
