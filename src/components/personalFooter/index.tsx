import React from 'react';
import { Container, Typography } from '@mui/material';

const PersonalFooter = () => {
  return (
    <div style={{ backgroundColor: '#050543' }}>
      <Container >
        <br />
        <Typography variant='body1' sx={{ color: '#fff' }} align='center'>
          Denis SiD (munaashe) © {new Date().getFullYear()}. No rights reserved, do as you please with the code.
        </Typography>
      </Container>
      <br />
    </div>
  )
}

export default PersonalFooter