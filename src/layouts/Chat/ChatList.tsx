import * as React from 'react'
import {
    Stack,
    Box,
    List,
    Typography
} from '@mui/material'
import ChatCard from './ChatCard';
import scrollbarStyles from '../../styles/scrollbarStyles';

interface ChatListProps {
    chats: any,
    route: string;
}

const ChatList: React.FC<ChatListProps> = ({ chats, route }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        color: theme => theme.palette.primary.main,
        borderRight: '1px solid #DAE0E6',
        height: '100%'
    }}>
        <Stack
            direction='row'
            spacing={1}
            p={1}
            sx={{
                borderBottom: '1px solid #DAE0E6',
                height: '50px'
            }}
        >
            <Typography
                variant="h6"
                fontWeight={700}
            >
                Últimos mensajes
            </Typography>
        </Stack>
        <Box sx={{
            display: 'flex',
            flex: '1 1 0',
            width: '100%',
            textAlign: 'center',
            overflowY: 'auto',
            height: '100%',
            flexDirection: 'column',
            ...scrollbarStyles
        }}>
            {chats.map((chat: any, i: number) => (
                <ChatCard
                    data={chat}
                    index={i}
                    route={route}
                />
            ))}
        </Box>
    </Box>
);

export default ChatList
