import React from 'react';
import { Helmet } from 'react-helmet-async';

import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import Portfolio from './Portfolio'

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Consulting Services | SiDesigned</title>
      </Helmet>
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Projects