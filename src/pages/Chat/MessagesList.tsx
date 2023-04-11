import * as React from 'react';
import Box from '@mui/material/Box';
import MessageCard from './MessageCard';
import { useAuth } from '../../providers/AuthContext';
import scrollbarStyles from '../../styles/scrollbarStyles';

const MessagesList: React.FC<{ messages: any }> = ({ messages }) => {
    const { state: { user } } = useAuth()
    const boxElem = React.useRef<HTMLDivElement>(null)

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

    if (user == null) return null;

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
            ...scrollbarStyles
        }} ref={boxElem}>
            {messages.map((message: any) => (
                <MessageCard
                    message={message.message ? message.message : message.mensaje}
                    isReceptor={message.emisor_id != user.id}
                />
            ))}
        </Box>
    );
}

export default MessagesList
