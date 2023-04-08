import * as React from 'react'
import {
    Stack,
    Box,
    List,
    Typography
} from '@mui/material'
import ChatCard from './ChatCard';

interface ChatListProps {
    chats: any,
    route: string;
}

const ChatList: React.FC<ChatListProps> = ({ chats, route }) => (
    <Box sx={{
        color: theme => theme.palette.primary.main,
        height: '100%',
        borderRight: '1px solid #DAE0E6'
    }}>
        <Stack direction='row' spacing={2} p={2}>
            <Typography
                variant="h5"
                fontWeight={700}
            >
                Últimos mensajes
            </Typography>
        </Stack>
        <List sx={{ width: '100%', p: 1 }}>
            {chats.map((chat: any, i: number) => (
                <ChatCard
                    data={chat}
                    index={i}
                    route={route}
                />
            ))}
        </List>
    </Box>
);

export default ChatList
