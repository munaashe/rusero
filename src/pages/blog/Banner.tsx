import { Container, Typography } from '@mui/material'
import React from 'react';
import bg from '../../assets/blog.jpg'

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '480px', marginTop: '-120px' }}></div>
            <Container maxWidth='lg' sx={{ padding: '20px', paddingTop: '8px', marginTop: '-50px', background: '#fff', borderRadius: '25px', boxShadow: 1 }}>
                <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', paddingTop: '20px', marginTop: '30px' }}>
                    Ka blog kaMunashe
                </Typography>
                <Container maxWidth='xs' sx={{ paddingRight: '20px' }}>
                    <Typography variant='subtitle2' align='center' color='text.secondary'>
                        Feel free to share with others. Getting you offended is the risk I've
                        taken in writing these posts. I won't apologise for that. You should
                        also not take it hard.
                    </Typography>
                    <br />
                    <Typography variant='subtitle2' align='center' color='text.secondary'>
                        I'm taking these posts from my wordpress free blog API. From the onset I
                        did not put much work in making my posts properly organised. So please
                        bear with me on this lousy look.
                    </Typography>
                </Container>
            </Container>
        </div>
    )
}

export default Banner