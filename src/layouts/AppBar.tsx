import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const AppBar: React.FC<{ title: string }> = ({ title }) => {

    return (
        <MuiAppBar position="static" sx={{
            backgroundColor: '#F2F5F7',
            color: theme => theme.palette.primary.main,
            width: '100%', // Large screen
            boxShadow: 'none',
            borderBottom: 0,
            transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            height: '10vh'
        }}>
            <Container maxWidth="xl" sx={{
                alignItems: 'center',
                display: 'flex', justifyContent: 'space-between'
            }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        lineHeight: '33px',
                        color: 'inherit',
                        fontSize: '2rem',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                    }}
                >
                    {title}
                </Typography>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
}

export default AppBar;
