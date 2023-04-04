import * as React from 'react';
import Aside from './Aside'
// Screens
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { LayoutProps } from '../types';
import { useAuth } from '../providers/AuthContext';
import { Navigate } from 'react-router-dom';

interface AdminLayoutProps extends LayoutProps {
    title: string
}

const DesktopLayout: React.FC<AdminLayoutProps> = ({ children }) => (
    <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    }}>
        <Aside />
        {children}
    </Box>
)

const Layout: React.FC<AdminLayoutProps> = ({ children, title }) => {
    const theme = useTheme()
    const { state: { isAuth } } = useAuth();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    if (!isAuth) return <Navigate to='/login' />

    if (!isSmall) {
        return (
            <DesktopLayout title={title}>
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
                height: '90vh',
                overflowY: 'scroll'
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default Layout
