import * as React from 'react'
import { Grid } from '@mui/material';
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
    <Grid container rowSpacing={2} direction="column">
        <Grid item sm padding='0 !important' mb={1}>
            <ToggleButtonGroup>
                <ToggleButton value="/chat/channels">
                    Canales
                </ToggleButton>
                <ToggleButton value="/chat/premium">
                    Premium
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
        <Grid item sm sx={{
            border: '1px solid #DDE2E8',
            borderRadius: '12px'
        }}>
            <Grid container minHeight='500px' maxHeight='400px'>
                <Grid item md={4} height='inherit'>
                    <ChatList chats={chats} route={route} />
                </Grid>
                <Grid item md={8}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default Chat;
