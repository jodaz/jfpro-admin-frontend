import * as React from 'react'
import {
    Grid
} from '@mui/material';
import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

const Chat = () => {

    return (
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
                    <ChatList />
                </Grid>
                <Grid item md={8}>
                    <ChatHeader />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Chat;