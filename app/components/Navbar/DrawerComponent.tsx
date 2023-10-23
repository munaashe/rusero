import React from 'react';
import Link from 'next/link';
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
                            <Link href='/' className='text-black text-base'>
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link href='/blog' className='text-black text-base'>
                                Blog
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