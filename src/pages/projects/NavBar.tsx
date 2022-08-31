import React from 'react'
import { Container, AppBar, Toolbar, CssBaseline, useMediaQuery, Box, useTheme } from '@mui/material';
import { Link} from 'react-router-dom';

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
              <Link to='/dream'>
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
                <Link to='/dream'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  About
                </Link>
                <Link to='/dream/philosophy'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  Portfolio
                </Link>
                <Link to='/dream/plan'
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '19px',
                    marginLeft: theme.spacing(10),
                  }}
                >
                  Contact
                </Link>
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