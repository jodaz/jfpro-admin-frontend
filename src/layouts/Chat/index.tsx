import * as React from 'react'
import { Grid, Box } from '@mui/material';
import ChatList from './ChatList';
import { LayoutProps } from '../../types';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import ToggleButton from '../../components/ToggleButton';

interface ChatLayoutProps extends LayoutProps {
    chats: any,
    route: string
}

const Chat: React.FC<ChatLayoutProps> = ({
    children,
    chats,
    route
}) => (
    <Grid container sx={{
        height: '100%',
        bgcolor: theme => theme.palette.secondary.main,
        p: 2,
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Box sx={{ witdh: '100%', mb: 2 }}>
            <ToggleButtonGroup>
                <ToggleButton value="/chat/channels">
                    Canales
                </ToggleButton>
                <ToggleButton value="/chat/premium">
                    Premium
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
        <Grid container sx={{
            border: '1px solid #DDE2E8',
            borderRadius: '12px',
            flex: 1
        }}>
            <Grid item md={4}>
                <ChatList chats={chats} route={route} />
            </Grid>
            <Grid item md={8}>
                {children}
            </Grid>
        </Grid>
    </Grid>
);

export default Chat;
