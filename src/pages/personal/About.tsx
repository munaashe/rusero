import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react';

import audi from '../../assets/audi.png';
import arsenal from '../../assets/arsenal.jpg';
import lds from '../../assets/lds.jpg';
import sprite from '../../assets/sprite.jpg';

const About = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ padding: '20px', marginTop: '-50px', background: '#fff', borderRadius: '25px' }}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center' sx={{ color: '#000' }}>
                        My Personal Attributes
                    </Typography>
                    <br />
                    <Typography variant='body1' align='center' sx={{ color: '#000' }}>
                        Apart from the obvious attributes (hardworking, integrity, honesty, passionate, etc.),
                        I will create the image in your mind as to my exact character using the things that I like:
                    </Typography>
                </Container>
                <Grid container spacing={3} justifyContent='space-evenly' sx={{ marginTop: '20px' }}>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{ borderRadius: '0px', boxShadow: 'none' }}>
                            <CardMedia
                                sx={{ objectFit: 'contain' }}
                                height='200px'
                                component='img'
                                image={arsenal}
                                alt='arsenal'
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{ borderRadius: '0px', boxShadow: 'none' }}>
                            <CardMedia
                                sx={{ objectFit: 'contain' }}
                                height='200px'
                                component='img'
                                image={audi}
                                alt='audi'
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{ borderRadius: '0px', boxShadow: 'none' }}>
                            <CardMedia
                                sx={{ objectFit: 'contain' }}
                                height='200px'
                                component='img'
                                image={lds}
                                alt='lds'
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{ borderRadius: '0px', boxShadow: 'none' }}>
                            <CardMedia
                                sx={{ objectFit: 'contain' }}
                                height='200px'
                                component='img'
                                image={sprite}
                                alt='sprite'
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About