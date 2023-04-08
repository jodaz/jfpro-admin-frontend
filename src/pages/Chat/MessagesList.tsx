import * as React from 'react';
import Box from '@mui/material/Box';
import MessageCard from './MessageCard';
import { useAuth } from '../../providers/AuthContext';

const MessagesList: React.FC = () => {
    const { state: { user } } = useAuth()
    const boxElem = React.useRef<HTMLDivElement>(null)
    const messages = [
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
        {
            emisor_id: 1,
            message: 'qlq'
        },
        {
            emisor_id: 2,
            message: 'receptor'
        },
    ]

    React.useEffect(() => {
        // scroll to bottom
        if (boxElem.current != null) {
            boxElem.current.scroll({ top: boxElem.current.scrollHeight, behavior: 'smooth' });

            boxElem.current.addEventListener('DOMNodeInserted', (event: any) => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flex: '1 1 0',
            width: '100%',
            textAlign: 'center',
            overflowY: 'auto',
            height: 'inherit',
            flexDirection: 'column',
            padding: '1rem 0',
            scrollbarColor: "#E5E5E5 #E5E5E5",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                backgroundColor: "#E5E5E5",
                width: '8px',
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                borderRadius: 8,
                backgroundColor: "#959595",
                minHeight: 12,
                border: "1px solid #959595",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#959595",
            },
        }} ref={boxElem}>
            {messages.map(message => (
                <MessageCard
                    message={message.message}
                    isReceptor={message.emisor_id != user.id}
                />
            ))}
        </Box>
    );
}

export default MessagesList
