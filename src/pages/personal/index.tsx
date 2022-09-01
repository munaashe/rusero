import React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '../../assets/bg.jpg';
import About from './About';
import Academics from './Academics';
import Contact from './Contact';
import { Helmet } from 'react-helmet-async';

const Personal = () => {
  return (
    <div style={{ background: '#fafafa', marginTop: '-140px' }}>
      <Helmet>
        <title>Personal Projects | SiDesigned</title>
      </Helmet>
      <br />
      <div style={{ background: `url(${bg})`, minHeight: '450px' }}>
        <Box sx={{ background: `url(${bg})`, minHeight: '400px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Typography sx={{ color: '#fff', fontSize: '1.6rem', fontWeight: '3.1px' }}>
            In a nutshell, I am that guy who loves
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '1.6rem', fontWeight: '3.1px' }}>
            to make sense of things,  and find new ways
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '1.6rem', fontWeight: '3.1px' }}>
            of solving problems.
          </Typography>
        </Box>
      </div>
      <About />
      <br />
      <br />
      <Academics />
      <Contact />
    </div>
  )
}

export default Personal