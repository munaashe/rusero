import React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '../../assets/bg.jpg';
import About from './About';
import Academics from './Academics';
import Contact from './Contact';
import { Helmet } from 'react-helmet-async';
import ReactTyped from 'react-typed';
import TechStack from './TechStack';
import Portfolio from './Portfolio';

const Personal = () => {
  return (
    <div style={{ background: '#f1f1f1', marginTop: '-140px', minHeight: '80vh' }}>
      <Helmet>
        <title>Home| SiDesigned</title>
        <meta
          name='description'
          content='I am Munashe. A proud software developer. A civil engineering graduate. I survived Mugabe and Wenger as a Zimbabwean Arsenal fan'
        />
      </Helmet>
      <br />
      <div style={{ background: `url(${bg})`, minHeight: '550px' }}>
        <Box sx={{ background: `url(${bg})`, minHeight: '500px', marginTop: '-10px', paddingX: '10px' }} display='flex' flexDirection='column' justifyContent='center' >
          <Typography align='left' sx={{ fontSize: '3.1rem', fontWeight: 'bold', color: '#fff', paddingLeft: '30px' }} >
            Hi,  <span style={{ paddingRight: "5px" }}></span>
            <ReactTyped
              strings={[" mom thinks I'm a computer freak,", "my friends think I'm a hacker,", "I write code,"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </Typography>
          <Typography align='left' sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.8rem', paddingLeft: '30px' }}>
            I Create Websites and Applications,
            <br /> that suite your Needs...
          </Typography>
        </Box>
      </div>
      <About />
      <Portfolio />
      <TechStack />
      <Academics />
      <Contact />
    </div>
  )
}

export default Personal