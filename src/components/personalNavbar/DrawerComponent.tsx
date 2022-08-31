import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to='/dream/' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/dream/philosophy' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                The Philosophy
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/dream/plan' style={{ textDecoration: 'none', fontSize: '15px', color: '#000' }}>
                                The Plan
                            </Link>
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