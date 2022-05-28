import { Route, Switch, useLocation } from 'react-router'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  const location = useLocation();
  return <>
  

  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

    <AnimatePresence exitBeforeEnter>
    {/* <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/work" component={WorkPage} />
      <Route exact path="/skills" component={MySkillsPage} />
    </Switch> */}
    <div>
    <Link to="aboutPage" spy={true} smooth={true} offset={0} duration={500}>
      <a href='/about'>About</a>
    </Link>
    <Link to="mySkillsPage" spy={true} smooth={true} offset={0} duration={500}>
      <a href='/skills'>Skills</a>
    </Link>
    <Link to="workPage" spy={true} smooth={true} offset={0} duration={500}>
      <a href='/work'>Work</a>
    </Link>
      <Element name="main" className='element'>
        <Main />
      </Element>
      <Element name="aboutPage" className='element'>
        <AboutPage />
      </Element>
      <Element name="mySkillsPage" className='element'>
        <MySkillsPage />
      </Element>
      <Element name="workPage" className='element'>
        <WorkPage />
      </Element>
     
    </div>
    </AnimatePresence>
    
    </ThemeProvider>


   
    </>
    
    
}

export default App

