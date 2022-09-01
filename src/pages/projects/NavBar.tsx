import React from 'react'
import { Container, AppBar, Toolbar, CssBaseline, useMediaQuery, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import siDesigned from '../../assets/sidesigned.png';
import DrawerComponent from './DrawerComponent';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div style={{ position: 'sticky', marginTop: '30px' }}>
      <Container maxWidth='lg' sx={{ borderRadius: '20px', padding: '10px' }}>
        <AppBar position='sticky' sx={{ backgroundColor: '#fff', borderRadius: '36px' }}>
          <CssBaseline />
          <Toolbar>
            <Box sx={{ flexGrow: 1, cursor: 'pointer', alignItems: 'center', marginLeft: '10px' }}>
              <Link to='/denis'>
                <img
                  src={siDesigned}
                  alt='denis logo'
                  height='50px'
                />
              </Link>
            </Box>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div style={{ display: 'flex', justifyContent: 'right', marginRight: '40px' }}>
                <HashLink smooth to='/denis#about'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  About
                </HashLink>
                <HashLink smooth to='/denis#portfolio'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  Portfolio
                </HashLink>
                <HashLink smooth to='/denis#contact'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  Contact
                </HashLink>
                <Link to='/'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  Return
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

export default NavBar