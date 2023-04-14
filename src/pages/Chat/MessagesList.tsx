import * as React from 'react';
import Box from '@mui/material/Box';
import MessageCard from './MessageCard';
import { useAuth } from '../../providers/AuthContext';
import scrollbarStyles from '../../styles/scrollbarStyles';
import { User } from '../../types/models';

interface MessageListProps {
    messages: any,
    isPremium: boolean | undefined
}

const getIfMessageisFromReceptor = (isPremium: boolean | undefined, message: any, user: User) => {
    if (isPremium) {
        return message.coach_id == null;
    }

    return message.emisor_id != user.id
}

const MessagesList: React.FC<MessageListProps> = ({ messages, isPremium }) => {
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
                    isReceptor={getIfMessageisFromReceptor(isPremium, message, user)}
                    isCoach={user.id == message.coach_id}
                />
            ))}
        </Box>
    );
}

export default MessagesList
