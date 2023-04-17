import React from 'react'
import { GitHub, WhatsApp, Email, Telegram, LinkedIn } from '@mui/icons-material'
import { Container, Grid, Typography, TextField, Box, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import contact from '../../assets/contact.jpg';

const Contact = () => {
    const [loader, setLoader] = React.useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);

        emailjs.sendForm('denis_siduna', 'rusero_site', e.currentTarget, 'EKLjLPu4AEXvL05kc')
            .then((result) => {
                console.log(result.text);
                alert('Submission successful, we will get back to you');
                setLoader(false);
            }, (error) => {
                console.log(error.text);
                setLoader(false);
                alert('Error! Please try again')
            });

        e.currentTarget.reset();
    };

    return (
        <div id='contact'>
            <Container maxWidth='lg' sx={{ marginTop: '30px' }}>
                <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', paddingBottom: '20px' }}>
                    Contact
                </Typography>
                <Grid container spacing={3} alignItems='center' justifyContent='center'>
                    <Grid item lg={6} xs={12}>
                        <img
                            src={contact}
                            width='100%'
                            alt='contact us'
                            style={{
                                padding: '20px',
                                borderRadius: '80px'
                            }}
                        />
                    </Grid>
                    <Grid item lg={5} xs={12} sx={{ padding: '40px' }}>
                        <form onSubmit={sendEmail}>
                            <Typography variant='subtitle1' sx={{ textAlign: 'center', px: '20px' }}>
                                Let's work together! I love propositions. 
                                Please reach out. I'll respond as fast as I can.
                            </Typography>
                            <br />
                            <Grid container spacing={0.9} style={{ backgroundColor: 'transparent', paddingTop: '0px' }}>
                                <Grid xs={12} sm={12} item>
                                    <TextField
                                        placeholder='Name'
                                        label='Name'
                                        name='name'
                                        variant='outlined'
                                        fullWidth required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#7ab4c0',
                                                borderWidth: '1px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='email'
                                        placeholder='Enter email'
                                        label='Email'
                                        name='email'
                                        variant='outlined'
                                        fullWidth required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#7ab4c0',
                                                borderWidth: '1px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label='Message'
                                        multiline rows={2}
                                        placeholder='Type your message here'
                                        name='message'
                                        variant='outlined'
                                        fullWidth required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#050543',
                                            }
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#7ab4c0',
                                                borderWidth: '1px'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box textAlign='center'>
                                        <Button type='submit'
                                            variant='contained'
                                            style={{
                                                backgroundColor: loader ? '#add8e6' : '#050543',
                                                color: '#e1e1e1',
                                                fontSize: '14px',
                                                borderRadius: 10,
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                        <Grid container spacing={5} alignItems='center' justifyContent='space-evenly' sx={{ pl: '40px', pt: '60px', display: 'flex' }}>
                            <a href='https://github.com/munaashe' style={{ textDecoration: 'none' }}>
                                <GitHub
                                    sx={{
                                        fontSize: '40px',
                                        color: '#171515'
                                    }}
                                />
                            </a>
                            <a href='mailto: denis.siduna@gmail.com' style={{ textDecoration: 'none' }}>
                                <Email
                                    sx={{
                                        fontSize: '40px',
                                        color: '#5c5c5c'
                                    }}
                                />
                            </a>
                            <a href='https://t.me/munaashe' style={{ textDecoration: 'none' }}>
                                <Telegram
                                    sx={{
                                        fontSize: '40px',
                                        color: '#0088cc'
                                    }}
                                />
                            </a>
                            <a href='https://linkedin.com/in/munaashe' style={{ textDecoration: 'none' }}>
                                <LinkedIn
                                    sx={{
                                        fontSize: '40px',
                                        color: '#0077b5'
                                    }}
                                />
                            </a>
                            <a href='https://wa.me/27685229708' style={{ textDecoration: 'none' }}>
                                <WhatsApp
                                    sx={{
                                        fontSize: '40px',
                                        color: '#4fce5d'
                                    }}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </div >
    )
}

export default Contact