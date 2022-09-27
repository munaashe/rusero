import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { GitHub, WhatsApp, Email, Telegram } from '@mui/icons-material'

const Contact = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Container maxWidth='lg' sx={{ padding: '20px' }}>
                <Typography variant='h4' align='center'>
                    Contacts
                </Typography>
                <br/>
                <Container maxWidth='md'>
                    <Grid container spacing={5}>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='row' alignItems='center' gap={2}>
                                <GitHub
                                    sx={{
                                        fontSize: '40px',
                                        color: '#050543'
                                    }}
                                />
                                <Typography variant='body1' color='text.secondary' align='left'>
                                    <a href='https://github.com/munaashe' style={{ textDecoration: 'none', color: '#000' }}>@munaashe</a>
                                </Typography>
                            </Stack>
                            <br />
                            <Stack direction='row' alignItems='center' gap={2}>
                                <Email
                                    sx={{
                                        fontSize: '40px',
                                        color: '#050543'
                                    }}
                                />
                                <Typography variant='body1' color='text.secondary' align='left'>
                                    <a href='mailto: denis.siduna@gmail.com' style={{ textDecoration: 'none', color: '#000' }}>denis.siduna@gmail.com</a>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Stack direction='row' alignItems='center' gap={2}>
                                <Telegram
                                    sx={{
                                        fontSize: '40px',
                                        color: '#050543'
                                    }}
                                />
                                <Typography variant='body1' color='text.secondary' align='left'>
                                    <a href='https://t.me/munaashe' style={{ textDecoration: 'none', color: '#000' }}>@munaashe</a>
                                </Typography>
                            </Stack>
                            <br />
                            <Stack direction='row' alignItems='center' gap={2}>
                                <WhatsApp
                                    sx={{
                                        fontSize: '40px',
                                        color: '#050543'
                                    }}
                                />
                                <Typography variant='body1' color='text.secondary' align='left'>
                                    <a href='https://wa.me/27685229708' style={{ textDecoration: 'none', color: '#000' }}>+27 68 522 9708</a>
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}

export default Contact