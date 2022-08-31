import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#654321' }}>
      <Container >
        <br />
        <Typography variant='body1' sx={{ color: '#fff' }} align='center'>
          SiDesigned © {new Date().getFullYear()}. No rights reserved, do as you please with the code.
        </Typography>
      </Container>
      <br />
    </div>
  )
}

export default Footer