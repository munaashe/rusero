import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../assets/bg.jpg';
import denis from '../../assets/denis.jpg';
import tiger from '../../assets/tiger.jpg';

const Landing = () => {
  return (
    <div style={{ background: '#dfe0df' }}>
      <Box sx={{ background: `url(${bg})`, minHeight: '400px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography sx={{ color: '#fff', fontSize: '2.8rem', fontWeight: '3.1px' }}>
          Tech, at Godspeed . . .
        </Typography>
        <Typography sx={{ color: '#fff', fontSize: '1.9rem', fontWeight: '1.1px', fontStyle: 'italic' }}>
          . . . Feel It!
        </Typography>
      </Box>
      <Container maxWidth='lg' sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '50px', marginTop: '-70px', marginLeft: '30px', marginRight: '70px' }}>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item xs={12} lg={3} md={3} sm={12}>
            <img
              src={denis}
              alt='Denis Siduna'
              height='250px'
              style={{
                padding: '30px',
                borderRadius: '125px'
              }}
            />
          </Grid>
          <Grid item xs={12} lg={9} md={8} sm={12}>
            <Typography align='center' sx={{ color: '#050543', fontSize: '1.3rem' }}>
              "Hey gorgeous, welcome to our world.
            </Typography>
            <Typography align='center' sx={{ color: '#050543', fontSize: '1.3rem' }}>
              Click to enter into any of the two sites."
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ paddingBottom: '20px' }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Link to='/denis' style={{ textDecoration: 'none', textAlign: 'center' }}>
              <Box textAlign='center'>
                <Button variant='outlined' sx={{ fontSize: '25px', borderRadius: '20px', backgroundColor: '#000000', color: '#fff' }}>
                  Consulting Services
                </Button>
              </Box>
            </Link>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Link to='/dream' style={{ textDecoration: 'none', textAlign: 'center' }}>
              <Box textAlign='center'>
                <Button variant='outlined' sx={{ fontSize: '25px', borderRadius: '20px', backgroundColor: '#000000', color: '#fff' }}>
                  Personal Projects
                </Button>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container maxWidth='md' sx={{ padding: '20px' }}>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography align='center' sx={{ color: '#050543', fontSize: '1.2rem' }}>
              Art is how I shape up the components
            </Typography>
            <Typography align='center' sx={{ color: '#050543', fontSize: '1.2rem' }}>
              Logic is how everything relates to each other
            </Typography>
            <Typography align='center' sx={{ color: '#050543', fontSize: '1.2rem' }}>
              Magic is how the user sees it all
            </Typography>
            <Typography align='center' variant='subtitle2' sx={{ color: '#050543', fontStyle: 'italic' }}>
              -Denis Siduna
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src={tiger}
              alt='Denis Siduna'
              height='350px'
              style={{
                padding: '30px',
                borderRadius: '175px'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Landing