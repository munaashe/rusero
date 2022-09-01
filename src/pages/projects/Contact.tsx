import { Container, Grid, Typography, TextField, Box, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import React from 'react';

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
        <Typography variant='h4' align='center' sx={{ color: '#050543' }}>
          Contact
        </Typography>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item lg={6} xs={12}>
            <img
              src={contact}
              width='100%'
              alt='contact us'
              style={{
                padding: '20px'
              }}
            />
          </Grid>
          <Grid item lg={5} xs={12} sx={{ padding: '40px' }}>
            <form onSubmit={sendEmail}>
              <Typography variant='h6' sx={{ color: '#050543', textAlign: 'center' }}>
                Please reach out for any services
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
                        backgroundColor: loader ? '#add8e6':'#050543',
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
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact