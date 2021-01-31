import React from 'react'
import './app.css'
import { Row, Col } from 'react-flexbox-grid'
import About from './Components/About/About'
import Skills from './Components/Skill/Skills'
import Github from './Components/Github/Github'
import Header from './Components/Layout/Header'
import Banner from './Components/Layout/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Layout/Footer'
import SideNav from './Components/Layout/Navbar/SideNav'
import { ScrollProvider } from './Context/scroll'
import { isMobile } from 'react-device-detect'
import Particles from 'react-particles-js'
import AnimatedCursor from 'react-animated-cursor'

const particles = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: '#7f5af0',
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 0.2,
    },
  },
}

function App() {
  return (
    <ScrollProvider>
      <AnimatedCursor
        innerSize={25}
        outerSize={13}
        color="127, 90, 240"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <div className="wrapper">
        <Particles className="particles" params={particles} />
        <Header />
        <Row>
          {!isMobile && (
            <Col lg={2}>
              <SideNav />
            </Col>
          )}
          <Col lg={10} xs={12}>
            <Banner />
            <About />
            <Skills />
            <Github />
            <Contact />
          </Col>
        </Row>
        <Footer />
      </div>
    </ScrollProvider>
  )
}

export default App
