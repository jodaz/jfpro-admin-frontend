import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps } from '../types';

const AppBar: React.FC<AppBarProps> = ({ title, position, isSmall }) => (
    <MuiAppBar position={position} sx={{
        backgroundColor: '#F2F5F7',
        color: theme => theme.palette.primary.main,
        width: '100%', // Large screen
        boxShadow: 'none',
        borderBottom: 0,
        transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        height: '10vh'
    }}>
        <Toolbar>
            {isSmall && (
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    lineHeight: '33px',
                    color: 'inherit',
                    fontSize: '2rem',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    flexGrow: 1
                }}
            >
                {title}
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </Tooltip>
            </Box>
        </Toolbar>
    </MuiAppBar>
);

export default AppBar;
