import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import future from '../../assets/future.jpg';
import team from '../../assets/team.jpg';

const Goal = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ marginTop: '30px' }}>
                <Typography variant='h4' align='center' sx={{ color: '#050543', padding: '20px' }}>
                    The Goal
                </Typography>
                <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' sx={{ marginBottom: '40px', marginTop: '20px' }}>
                    <Grid item lg={6} xs={12}>
                        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={team}
                                alt='team'
                                style={{ height: '340px', marginLeft: '20px' }}
                            />
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12} sx={{ padding: '40px' }} >
                        <Typography variant='h4' align='center' sx={{ color: '#050543' }}>
                            Winning as a Team
                        </Typography>
                        <Typography variant='subtitle1' align='center' sx={{ color: '#333333' }}>
                            If you make it alone, we will all borrow from you.
                            But if you put strides for us all to make it, you
                            will have many sources to borrow from.
                        </Typography>
                    </Grid>
                </Grid>
                <br />

                <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '20px', marginBottom: '40px' }} >
                    <Grid item lg={6} xs={12} sx={{ padding: '40px' }} >
                        <Typography variant='h4' align='center' sx={{ color: '#050543' }}>
                            The Next Generation
                        </Typography>
                        <Typography variant='subtitle1' align='center' sx={{ color: '#333333' }}>
                            There is nothing more definitive of failure if those who come after us have it as hard as we did.
                            It is incumbent upon us to make it better for them, to get them to achieve greater heights than we did.
                            Once they succeed, we will many numerous young ones who will buy us some ice-cold Sprite in old age.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <img
                            src={future}
                            alt='the future'
                            style={{ height: '340px', marginLeft: '20px' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Goal