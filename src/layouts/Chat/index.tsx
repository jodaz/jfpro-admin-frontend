import * as React from 'react'
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import ChatList from './ChatList';
import { LayoutProps } from '../../types';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import ToggleButton from '../../components/ToggleButton';
import { useAuth } from '../../providers/AuthContext';
import PrivateRoute from '../../components/PrivateRoute';
import { useParams } from 'react-router-dom';
import LinkBehavior from '../../components/LinkBehavior';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
    const { chat_id } = useParams()

    const renderSmallScreens = () => (
        <Grid container sx={{
            minHeight: { xs: '75vh', sm: '55vh', md: '60vh', lg: '70vh' },
            width: '100%'
        }}>
            {!!(!chat_id ) && (
                <Grid item md={4} sm={12} xs={12} height='inherit'>
                    <ChatList chats={chats} route={route} />
                </Grid>
            )}
            {!!(chat_id ) && (
                <Grid item md={8}>
                    {children}
                </Grid>
            )}
        </Grid>
    )

    if (!user) return null;

    return (
        <Grid container direction="column" sx={{
            padding: '0 1rem',
            paddingTop: isSmall ? '5rem' : 'unset'
        }}>
            {!(isSmall && chat_id ) ? (
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
            ) : (
                <Grid item sm padding='0 !important' mb={1}>
                    <Button
                        component={LinkBehavior}
                        to='/chat/channels'
                        color='primary'
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Regresar
                    </Button>
                </Grid>
            )}
            <Grid item sm={12} sx={{
                border: '1px solid #DDE2E8',
                borderRadius: '12px',
                paddingTop: '0 !important'
            }}>
                {isSmall ? (<>{renderSmallScreens()}</>) : (
                    <Grid container sx={{
                        minHeight: { xs: '80vh', sm: '55vh', md: '60vh', lg: '70vh' },
                        width: '100%'
                    }}>
                        <Grid item md={4} sm={12} xs={12} height='inherit'>
                            <ChatList chats={chats} route={route} />
                        </Grid>
                        <Grid item md={8}>
                            {children}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}

export default Chat;
