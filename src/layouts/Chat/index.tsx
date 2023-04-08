import * as React from 'react'
import {
    Grid
} from '@mui/material';
import ChatList from './ChatList';
import { LayoutProps } from '../../types';

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
        p: 2
    }}>
        <Grid container sx={{
            border: '1px solid #DDE2E8',
            borderRadius: '12px'
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
