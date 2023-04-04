import { Box, Drawer, Toolbar } from "@mui/material";

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
                overflowY: 'auto'
            }}
            id="drawer-container"
        >
        </Box>
    </Drawer>
)


export default Sidebar;
