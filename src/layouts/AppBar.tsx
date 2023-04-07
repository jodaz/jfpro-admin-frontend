import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps } from '../types';
import MessageButton from '../components/Buttons/MessageButton';
import NotificationButton from '../components/Buttons/NotificationButton';
import ReportButton from '../components/Buttons/ReportButton';
import { Stack } from '@mui/material';

const AppBar: React.FC<AppBarProps> = ({ title, position, isSmall, user }) => (
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
            {!isSmall && (
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
            )}
            <Box sx={{
                display: 'flex',
                justifyContent: 'end',
                flex: 1
             }}>
                <Stack direction='row' spacing={1} mr={4}>
                    <ReportButton />
                    <NotificationButton />
                    <MessageButton />
                </Stack>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#DAE0E6',
                    borderRadius: '73px',
                    p: 1
                }}>
                    <Avatar
                        alt={`${user.name} ${user.lastname}`}
                        src="/static/images/avatar/2.jpg"
                        sx={{ width: 32, height: 32, mr: 1 }}
                    />
                    {!isSmall && (
                        <Typography variant="subtitle1">
                            {`${user.name} ${user.lastname}`}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Toolbar>
    </MuiAppBar>
);

export default AppBar;
