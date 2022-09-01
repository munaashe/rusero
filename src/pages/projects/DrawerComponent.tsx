import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor='right'
                PaperProps={{
                    sx: {
                        backgroundColor: '#fff',
                        color: '#000'
                    }
                }}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink smooth to='/denis#about' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                About
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink smooth to='/denis#portfolio' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                Portfolio
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <HashLink smooth to='/denis#contact' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                Contact
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                Return
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: '#000', fontSize: '25px', fontWeight: 'bold' }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent