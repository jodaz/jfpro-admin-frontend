import * as React from 'react'
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import ChatList from './ChatList';
import { LayoutProps } from '../../types';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import ToggleButton from '../../components/ToggleButton';
import { useAuth } from '../../providers/AuthContext';
import PrivateRoute from '../../components/PrivateRoute';
import { useParams } from 'react-router-dom';

interface ChatLayoutProps extends LayoutProps {
    chats: any,
    route: string
}

const Chat: React.FC<ChatLayoutProps> = ({
    children,
    chats,
    route
}) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { state: { user } } = useAuth()

    if (!user) return null;

    return (
        <Grid container rowSpacing={2} direction="column" sx={{
            paddingTop: isSmall ? '6rem' : 'unset'
        }}>
            <PrivateRoute authorize='administrador'>
                <Grid item sm padding='0 !important' mb={1}>
                    <ToggleButtonGroup>
                        <ToggleButton value="/chat/premium">
                            Premium
                        </ToggleButton>
                        <ToggleButton value="/chat/channels">
                            Free
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </PrivateRoute>
            <Grid item sm={12} sx={{
                border: '1px solid #DDE2E8',
                borderRadius: '12px',
                paddingTop: '0 !important'
            }}>
                <Grid container sx={{
                    minHeight: { xs: '90vh', sm: '55vh', md: '60vh', lg: '70vh' },
                    width: '100%'
                }}>
                    <Grid item md={4} sm={12} xs={12} height='inherit'>
                        <ChatList chats={chats} route={route} />
                    </Grid>
                    <Grid item md={8}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Chat;
