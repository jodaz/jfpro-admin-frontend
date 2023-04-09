import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

interface MessageCard {
    message: string;
    isReceptor: boolean;
}

const GeneralMessage = styled(Box)(() => ({
    position: 'relative',
    padding: '1rem',
    maxWidth: '50%',
    width: 'fit-content',
    marginBottom: '2px',
    borderRadius: '8px',
    fontWeight: 400,
    gap: '10px'
}))

const ReceptorMessage = styled(GeneralMessage)(() => ({
    backgroundColor: '#FFF',
    alignSelf: 'start',
    borderTopLeftRadius: 0,
    color: '#fff',
    marginLeft: '0.5rem'
}))

const SenderMessage = styled(GeneralMessage)(() => ({
    backgroundColor: '#161B24',
    borderTopRightRadius: 0,
    alignSelf: 'end',
    marginRight: '0.5rem',
    position: 'relative'
}))

const MessageCard: React.FC<MessageCard> = ({ message, isReceptor }) => {

    if (isReceptor) {
        return (
            <ReceptorMessage>
                <Typography textAlign='left' color="primary.main">
                    {message}
                </Typography>
            </ReceptorMessage>
        );
    }

    return (
        <SenderMessage>
            <Typography
                textAlign='left'
                color="secondary.main"
            >
                {message}
            </Typography>
        </SenderMessage>
    );
}

export default MessageCard
