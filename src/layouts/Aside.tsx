import {
    Box,
    Drawer,
    Toolbar
} from "@mui/material";
import LogoutButton from "../components/Buttons/Logout";

const drawerWidth = '350px';

const Sidebar = () => (
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                border: 'none',
                bgcolor: theme => theme.palette.primary.main
            },
            zIndex: 1000,
            bgcolor: theme => theme.palette.primary.main
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
        </Toolbar>
        <Box
            sx={{
                height: '100%',
                maxWidth: drawerWidth,
                overflowY: 'auto',
                display: 'flex',
                p: 2
            }}
            id="drawer-container"
        >
            <LogoutButton />
        </Box>
    </Drawer>
)


export default Sidebar;