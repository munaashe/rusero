'use client'

import { Container, AppBar, Toolbar, CssBaseline, useMediaQuery, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import sid from '../../assets/sidesigned.png'
import DrawerComponent from './DrawerComponent';
import Image from 'next/image';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className="sticky top-48 fixed">
            <Container maxWidth='lg' sx={{ borderRadius: '20px', padding: '10px' }}>
                <AppBar position='sticky' sx={{ backgroundColor: '#fff', borderRadius: '36px' }}>
                    <CssBaseline />
                    <Toolbar sx={{display: 'flex'}}>
                        <Box sx={{ flexGrow: 1, cursor: 'pointer', alignItems: 'center', marginLeft: '10px' }}>
                            <Link href='/'>
                                <Image
                                    src={sid}
                                    alt='denis logo'
                                    height={40}
                                    width={120}
                                />
                            </Link>
                        </Box>
                        {isMobile ? (
                            <DrawerComponent />
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'right'}}>
                                <Link href='/'
                                    className="text-black text-[18px] font-semibold mx-8 hover:text-blue-700"
                                >
                                    Home
                                </Link>
                                <Link href='/blog'
                                    className="text-black text-[18px] font-semibold mx-8 hover:text-blue-700"
                                >
                                    Blog
                                </Link>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

export default Navbar