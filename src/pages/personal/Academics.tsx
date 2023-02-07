import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { Engineering, ShoppingCart, CurrencyBitcoin, Spa } from '@mui/icons-material';

const Academics = () => {
    return (
        <div style={{ marginTop: '40px', background: '#fff' }}>
            <Container maxWidth='lg' sx={{ padding: '30px', marginTop: '-50px', background: '#fff', borderRadius: '25px' }}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' align='center' sx={{ color: '#000' }}>
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
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{  boxShadow: 'none' }}>
                            <Box textAlign='center'>
                                <ShoppingCart
                                    sx={{
                                        fontSize: '150px',
                                        color: '#050543',
                                        textAlign: 'center'
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant='h6' align='center' sx={{ color: '#000' }}>
                                    E-Commerce
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{  boxShadow: 'none' }}>
                            <Box textAlign='center'>
                                <CurrencyBitcoin
                                    sx={{
                                        fontSize: '150px',
                                        color: '#050543'
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant='h6' align='center' sx={{ color: '#000' }}>
                                    BlockChain
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{  boxShadow: 'none' }}>
                            <Box textAlign='center'>
                                <Engineering
                                    sx={{
                                        fontSize: '150px',
                                        color: '#050543'
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant='h6' align='center' sx={{ color: '#000' }}>
                                    Engineering
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{  boxShadow: 'none' }}>
                            <Box textAlign='center'>
                                <Spa
                                    sx={{
                                        fontSize: '150px',
                                        color: '#050543'
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant='h6' align='center' sx={{ color: '#000' }}>
                                    Mental Health
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Academics