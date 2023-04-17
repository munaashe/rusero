import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

import mentalHealth from '../../assets/mentalHealth.png';
import ecommerce from '../../assets/ecommerce.png';
import blockchain from '../../assets/blockchain.png';
import civilEngineering from '../../assets/civilEngineering.jpg';

const interests = [
    {
        name: 'E-Commerce',
        image: ecommerce

    },
    {
        name: 'Mental Health',
        image: mentalHealth
    },
    {
        name: 'Blockchain',
        image: blockchain
    },
    {
        name: 'Engineering',
        image: civilEngineering
    },
]
const Academics = () => {
    return (
        <div style={{ marginTop: '40px', background: '#fff' }}>
            <Container maxWidth='lg' sx={{ padding: '30px', marginTop: '-50px', background: '#fff', borderRadius: '25px' }}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', paddingBottom: '20px' }}>
                        Areas of Interest
                    </Typography>
                    <br />
                    <Typography variant='body1' align='center' sx={{ color: '#000' }}>
                        Generally, I would say I am open minded, and quite inquisitive.
                        If narrowed down, I believe the 4 main interests I have can be
                        summarised as:
                    </Typography>
                </Container>
                <Grid container spacing={3} justifyContent='space-evenly' alignItems='center' sx={{ paddingTop: '23px' }}>
                    {interests.map((interest, index) => {
                        const { image, name } = interest || {};
                        return (
                            <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
                                <Card sx={{ boxShadow: 'none' }}>
                                    <CardMedia
                                        sx={{ objectFit: 'contain' }}
                                        height='200px'
                                        component='img'
                                        image={image}
                                        alt={name}
                                    />
                                    <CardContent>
                                        <Typography variant='h6' align='center' sx={{ color: '#000' }}>
                                            {name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Academics