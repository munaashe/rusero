import { Container, Grid, Typography, Card, CardMedia } from '@mui/material'
import React from 'react'
import skyangel from '../../assets/skyangel.png';
import smhzw from '../../assets/smhzw.png';
import patriotizim from '../../assets/patriotizim.png';

const Portfolio = () => {
  return (
    <div id='portfolio' style={{ background: '#fafafa' }}>
      <Container maxWidth='lg' sx={{ marginTop: '30px' }}>
        <br />
        <Typography variant='h4' align='center' sx={{ color: '#050543', marginTop: '15px' }}>
          Portfolio
        </Typography>
        <Grid container spacing={2} style={{ justifyContent: 'space-evenly' }}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <a target='_blank' rel='noreferrer' href='https://patriotizim.com/' >
              <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                <CardMedia
                  sx={{ objectFit: 'contain', ':hover': { height: '260px' } }}
                  height='200px'
                  component='img'
                  image={patriotizim}
                  alt='PatriotiZim - reliable fake news'
                />
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <a target='_blank' rel='noreferrer' href='https://smhzw.org.zw/' >
              <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                <CardMedia
                  sx={{ objectFit: 'contain', ':hover': { height: '260px' } }}
                  height='200px'
                  component='img'
                  image={smhzw}
                  alt='Student Mental Health Zimbabwe'
                />
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <a target='_blank' rel='noreferrer' href='https://skyangel.co.zw/' >
              <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                <CardMedia
                  sx={{ objectFit: 'contain', ':hover': { height: '260px' } }}
                  height='200px'
                  component='img'
                  image={skyangel}
                  alt='SkyAngel Private Jet Charters'
                />
              </Card>
            </a>
          </Grid>
        </Grid>
      </Container>
      <br />
    </div >
  )
}

export default Portfolio