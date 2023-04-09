import * as React from 'react';
import Aside from './Aside'
// Screens
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { LayoutProps } from '../types';
import { useAuth } from '../providers/AuthContext';
import { Navigate } from 'react-router-dom';
import AppBar from './AppBar';

interface AdminLayoutProps extends LayoutProps {
    title: string;
    AppBar?: React.ReactNode
}

const DesktopLayout: React.FC<AdminLayoutProps> = ({ children, AppBar }) => (
    <Box sx={{
        display: 'flex',
        minHeight: '100vh',
        minWidth: 'fit-content',
        width: '100%'
    }}>
        <Aside />
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%'
        }}>
            {AppBar}
            <Box sx={{
                height: '100%',
                width: '100%'
            }}>
                {children}
            </Box>
        </Box>
    </Box>
)

const Layout: React.FC<AdminLayoutProps> = ({ children, title }) => {
    const theme = useTheme()
    const { state: { isAuth, user } } = useAuth();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    if (!isAuth) return <Navigate to='/login' />

    if (!isSmall) {
        return (
            <DesktopLayout
                title={title}
                AppBar={
                    <AppBar
                        title={title}
                        isSmall={isSmall}
                        position='static'
                        user={user}
                    />
                }
            >
                {children}
            </DesktopLayout>
        )
    }

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }} id="drawer-container">
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%'
            }}>
                <AppBar
                    title={title}
                    isSmall={isSmall}
                    position='fixed'
                    user={user}
                />
                <Box sx={{
                    height: '100%',
                    width: '100%'
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default Layout
