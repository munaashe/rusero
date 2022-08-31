import { Box, Container, Grid, Typography, Card, CardMedia } from '@mui/material';
import ReactTyped from 'react-typed';

import bg from '../../assets/bg2.png';

import react from '../../assets/react.jpg';
import next from '../../assets/next.jpg';
import firebase from '../../assets/firebase.jpg';
import solidity from '../../assets/solidity.jpg';
import typescript from '../../assets/typescript.jpg';
import gatsby from '../../assets/gatsby.jpg';
import mui from '../../assets/mui.jpg';
import javascript from '../../assets/javascript.jpg';
import angular from '../../assets/angular.jpg';
import mongo from '../../assets/mongo.jpg';

const About = () => {

  return (
    <div>
      <Box sx={{ background: `url(${bg})`, minHeight: '500px', marginTop: '-110px' }} display='flex' flexDirection='column' justifyContent='center'>
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
      <Container maxWidth='lg' sx={{ marginTop: '30px' }}>
        <Typography align='center' variant='h4' sx={{ color: '#050543' }}>
          Tech Stack
        </Typography>
        <br />
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box display='flex' flexDirection='column'>
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={react}
                    alt='react'
                  />
                </Card>
                <br />
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={mongo}
                    alt='mongo db'
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box display='flex' flexDirection='column'>
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={next}
                    alt='next js'
                  />
                </Card>
                <br />
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={firebase}
                    alt='Firebase'
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box display='flex' flexDirection='column'>
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={typescript}
                    alt='zanu'
                  />
                </Card>
                <br />
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={javascript}
                    alt='zanu'
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Box display='flex' flexDirection='column'>
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={angular}
                    alt='zanu'
                  />
                </Card>
                <br />
                <Card sx={{ display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    height='100px'
                    component='img'
                    image={solidity}
                    alt='zanu'
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  )
}

export default About