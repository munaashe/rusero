import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'

import audi from '../../assets/audi.png';
import arsenal from '../../assets/arsenal.jpg';
import lds from '../../assets/lds.jpg';
import sprite from '../../assets/sprite.jpg';

const thingsILike = [
    {
        img: audi,
        alt: 'audi'
    },
    {
        img: arsenal,
        alt: 'arsenal'
    },
    {
        img: lds,
        alt: 'The Church of Jesus Christ of Latter Day Saints'
    },
    {
        img: sprite,
        alt: 'sprite'
    },
]

const About = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ padding: '20px', paddingTop: '30px', marginTop: '-50px', background: '#fff', borderRadius: '25px', boxShadow: 1 }}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center' sx={{ color: '#000', fontWeight: 'bold' }}>
                        My Personal Attributes
                    </Typography>
                    <br />
                    <Typography variant='body1' align='center' sx={{ color: '#000' }}>
                        In a nutshell, I am that guy who loves
                        to make sense of things, and find new ways
                        of solving problems. I will create the image in
                        your mind as to my exact character using the things that I like:
                    </Typography>
                </Container>
                <Grid container spacing={3} justifyContent='space-evenly' sx={{ marginTop: '20px' }}>
                    {thingsILike.map((thing, index) => {
                        const { img, alt } = thing || {};
                        return (
                            <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
                                <Card sx={{ borderRadius: '0px', boxShadow: 'none' }}>
                                    <CardMedia
                                        sx={{ objectFit: 'contain' }}
                                        height='200px'
                                        component='img'
                                        image={img}
                                        alt={alt}
                                    />
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default About